import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-ordered-page',
  templateUrl: './ordered-page.component.html',
  styleUrls: ['./ordered-page.component.css']
})
export class OrderedPageComponent {
  orderedData: any;
  constructor(private service: OrderDetailsService) { }
  ngOnInit() {
    this.orderedData = this.service.foodDetails;
  }
  removeOrderedItem(orderitem:any) {
    this.orderedData=this.orderedData.filter((element:any) => element.foodName!=orderitem)
  }
  
}
