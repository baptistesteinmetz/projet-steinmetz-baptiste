import { ApiService } from './api.service';
import { EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../shared/models/products';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError, tap, map, filter} from 'rxjs/operators';
@Injectable(
  {
  providedIn: 'root'
  }
)
export class ProductService extends ApiService {

  constructor(private hClient: HttpClient) {
    super(hClient);
   }

  private products: Product[];
  private filteredProducts$: Subject<Product[]> = new ReplaySubject<Product[]>(1);

  public getProducts(): Observable<Product[]> {
    // return cached products
    if (this.products) {
      return of(this.products);
    }
    // fetch and cache products
    return this.hClient.get(environment.api + '/product/all').pipe(
      tap((data : any) => {
        this.products = data.data;
        this.filteredProducts$.next(this.products);
      }
      )
    );
  }

  getSearchResults(): Observable<Product[]> {
    return this.filteredProducts$.asObservable();
  }

  searchProduct(searchTerm: any): Observable<void> {
    return this.getProducts().pipe(
      // using tap to update the stream without changing any data
      tap((products: any) => {
        products = products.filter(product => {
          if(!isNaN(parseFloat(searchTerm)))
          {
            return product.price.toString().includes(searchTerm.toString());
          }
          else {
            return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)
          }
        });
        // updating the stream
        this.filteredProducts$.next(products);
      }),
      map(() => void 0)
    );
  }

  public getSingleProduct(id): Observable<any> {
    return this.hClient.get(environment.api + '/product/' + id).pipe(
      tap((data : Product) => {
        this.products = data[0];
      })
    );
  }



  priceFilter(status: number): Observable<any[]> {
    return this.getProducts().pipe(
      tap((products : any) => {
        products = products.sort((a,b) => {
          switch (status) {
            case 0:
              return a.price < b.price ? -1 : 1;
              break;
            case 1:
              return a.price > b.price ? -1 : 1;
              break;
            }
        });
        this.filteredProducts$.next(products);
      }
      ),
      map(() => void 0)
      );
  }

  nameFilter(status : number): Observable<any[]> {
    return this.getProducts().pipe(
      tap((products : any) => {
        products = products.sort((a,b) => {
          switch(status) {
            case 0:
              return a.name < b.name  ? -1 : 1;
              break;
            case 1:
              return a.name > b.name ? -1 : 1;
              break;
          }
        });
        this.filteredProducts$.next(products);
      }),
      map(() => void 0)
    );
  }


  buyProducts(products: Product[]) : Observable<any> {
    const  body = new URLSearchParams();
    let price = 0;
    products.forEach(product => {
      price += product.price;
    })
    body.set("price", price.toString());
    return this.hClient.post(environment.api + '/product/buy',body.toString(), this.httpOptions).pipe(
      map((data) => data)
    );
  }
}
