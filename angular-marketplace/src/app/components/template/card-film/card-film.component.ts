import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { Film } from 'src/app/views/list-filmes/list-films';
@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent {
  listfilms: Film[] = [];
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listfilms = film;
      

    })
  }
  selectFilm(film:Film):void{
    this.checkoutService.setPrice(film.price)
  }
}
