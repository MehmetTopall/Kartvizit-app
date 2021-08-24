import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl:string='https://demo.limantech.com/cards/public/api';
  cards!:Card[];
  filteredCards!:Card[];

  constructor(
    private http:HttpClient
  ) { }

  getCards(){
    this.http.get<Card[]>(this.apiUrl+'/cards')
    .subscribe((res:Card[])=>{
         this.cards=this.filteredCards=res;
    });

  }
  addCard(card:Card){
    return this.http.post(this.apiUrl+'/cards',card);
  }
  updateCard(card:Card, cardId:number){
    return this.http.put(this.apiUrl+'/cards/'+ cardId,card);
  }
  deleteCard(cardId:number){
    return this.http.delete(this.apiUrl+'/cards/'+ cardId);
  }
}
