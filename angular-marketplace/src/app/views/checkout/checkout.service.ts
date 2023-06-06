import { Injectable } from '@angular/core';
import { Film } from '../list-filmes/list-films';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001';
  public listFilms: Film[] = [];
  public totalPrice: number = 0;
  public listSelectedFilms : Film[] = [];
  private _priceHandler: number = 0;

  getPrice(): number {
    return this._priceHandler;
  }

  setPrice(value: number) {
    this._priceHandler = value;
  }
  constructor(private httpClient: HttpClient) {
  }
  getListFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.baseUrl + '/films');
  }
  selectFilm() {
    setTimeout(()=>{},1)
    this.totalPrice += this.getPrice();

    
  }
  unselectFilm(){
    this.totalPrice -= this.getPrice();
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
  }

}
