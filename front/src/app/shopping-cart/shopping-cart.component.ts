import { ProductService } from './../get-products.service';
import { Product } from './../../shared/models/products';
import { DelProduct, BuyProduct } from './../../shared/actions/product-action';
import { ProductState } from './../../shared/states/product-state';
import { Store } from '@ngxs/store';
import { Observable, of, timer } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],

})
export class ShoppingCartComponent implements OnInit {

  listProduct$: Observable<Product>;
  nbProducts$: Observable<number>;
  priceProducts$: Observable<number>;
  products: Product[];
  // @HostBinding('class.homeLogo') isHome:boolean = false;
  public empty: boolean = true;
  public buying:boolean = false;
  public bought: boolean = false;
  public errorBuying: boolean = false;
  ;
  public responseMessage: string=null;
  
  constructor(private productService: ProductService, private router: Router, private _renderer: Renderer2, private _elemRef : ElementRef, private store: Store) {
    // i want different styles depending on the route, since the shopping cart is shown on the store page (like amazon)
    if(this.router.url == '/cart') {
      this._renderer.setAttribute(this._elemRef.nativeElement, 'id','shopping-cart-page' );
    }
  }

  ngOnInit(): void {
    
    this.listProduct$ = this.store.select(state => state.listProducts.products);
    // Solution 1
    this.nbProducts$ = this.store.select(ProductState.getNbProducts);
    this.priceProducts$ = this.store.select(ProductState.getFullPriceProducts);
  }

  ngOnDestroy(): void {
  }

  onClickRemove(product) {
    this.removeItem(product);
  }
  removeItem(product) {
    this.store.dispatch(new DelProduct(product));
  }

  buyProducts(products) {
    products.subscribe(products => this.products = products);
    this.buying = true;
    this.productService.buyProducts(this.products).subscribe((response) => {
      if(response.success)
      {
        this.bought = true;
        this.store.dispatch(new BuyProduct(products));
      }
      else {
        this.errorBuying = true;
      }
      this.responseMessage = response.data;
    })
    let timer$ = timer(3000);
    timer$.subscribe(t=> {
      this.buying = false;
    });
  }
}
