import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../../shared/models/orders';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Order(obj);
        })
      })
    );
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(new_collection: Observable<Order[]>) {
    this.pCollection = new_collection;
  }

  // update item

  // add item


  // delete item

  // change state order
}
