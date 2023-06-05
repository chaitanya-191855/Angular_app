import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
  constructor(private param: ActivatedRoute, private service: OrderDetailsService,private router: Router) { }
  orderData: any;
  getMenuId: any;
  menuData: any;
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51N1Cx7SGRgKROCaGXHctqmN3VcUVO6d7O2SjS8eHYtmdjfmuCXxry1C8vYB4VjTFQGIKmwC6L5FfHLWHTf28HYK400GwFB4xYo';
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>');
      this.invokeStripe()
    }
  }
  
  registerUser(form: NgForm) {
    this.orderData = form.value;
  }
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({ stripeToken })
      }
    });

    paymentHandler.open({
      name: 'Cloud-Kitchen',
      description: 'Buying your selected food',
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key:this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);

    }
  }

}