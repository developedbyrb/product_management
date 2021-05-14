import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  // listFilter: string = 'Cart';
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log("Setter value is: ", this._listFilter);
    this.filteredProducts = this.performedFilter(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling.",
      "price": 32.990,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TDX-0048",
      "releaseDate": "April 18, 2021",
      "description": "Curved claw steel hammer.",
      "price": 8.99,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];
  constructor() { }

  performedFilter(filteredBy: string): IProduct[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filteredBy));
  }
  ngOnInit(): void {
    this.listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
