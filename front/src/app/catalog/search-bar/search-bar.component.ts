import { filter, map } from 'rxjs/operators';
import { ProductService } from './../../get-products.service';
import { Observable } from 'rxjs';
import { ProductListComponent } from './../product-list/product-list.component';
import { Product } from './../../../shared/models/products';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchInput: string;
  filterPriceStatus: number;
  filterNameStatus: number;

  @Input() products: Observable<Product>;
  message: any;
  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    // get products
    this.productService.getProducts().subscribe();
    this.searchInput = '';
    this.filterPriceStatus = 1;
  }

  onSearchProducts() : void
  {
    // on input change we search products and update the view
    this.productService.searchProduct(this.searchInput.toLowerCase()).subscribe();
  }

  onFilterPriceProducts() : void {
    // changing status and updating depending on price
    this.filterNameStatus = null;
    this.filterPriceStatus === 1 ? this.filterPriceStatus = 0 : this.filterPriceStatus = 1;
    this.productService.priceFilter(this.filterPriceStatus).subscribe();
  }

  onFilterNameProducts() : void {
    this.filterPriceStatus = null;
    // changing status and updating depending on name;
    this.filterNameStatus === 1 ? this.filterNameStatus = 0 : this.filterNameStatus = 1;
    this.productService.nameFilter(this.filterNameStatus).subscribe();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
