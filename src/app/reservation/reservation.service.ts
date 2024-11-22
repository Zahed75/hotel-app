import { Injectable } from '@angular/core';
import {Reservation} from '../models/reservation';

@Injectable({
  providedIn: 'root'
})


export class ReservationService {
  private reservations: Reservation[]=[];

  constructor() {
    let savedReservations=localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : []
  }



  // CRUD Operations


  getReservations():Reservation[]{
    return  this.reservations;

  }

  // get Reservation by ID

  getReservation(id:string):Reservation | undefined{
    return this.reservations.find(res=>res.id === id);

  }


  // addReservation

  addReservation(reservation:Reservation){
    this.reservations.push(reservation);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

  // delete

  deleteReservation(id:string):void{
    let index=this.reservations.findIndex(res=>res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));

  }

  // update

  updateReservation(updateReservation:Reservation){
    let index =this.reservations.findIndex(res=>res.id === updateReservation.id);
    this.reservations[index] = updateReservation;
    localStorage.setItem('reservation',JSON.stringify(this.reservations));
  }

}
