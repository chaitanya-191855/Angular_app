import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private service: OrderDetailsService) { }
  foodData: any;
  filteredData: any;
  ngOnInit(): void{
    this.foodData = this.service.foodDetails;
    this.filteredData = this.service.foodDetails;
  }
  searchText: string = "";
  onSearchTextEntered(searchVaue:string) {
    this.searchText = searchVaue;
    this.filteredData = this.filterbytext(searchVaue);
    console.log(this.filteredData)
    // console.log(this.searchText)
  }
  filterbytext(searchText: string) {
    if (this.foodData.length === 0 || searchText === '') {
      return this.foodData;
    } else {
      return this.foodData.filter((data:any) =>
        data.foodName.toLowerCase().includes(searchText)
      )
    }
  }
}
