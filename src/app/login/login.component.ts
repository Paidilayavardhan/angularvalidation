import { AsyncPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable,interval,map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe,TitleCasePipe,DatePipe,AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class HomeComponent {
name:string="Gani"
branch:string="computer science enginerring is no more"

currentDate:Date=new Date()
currentTime:Observable<Date> = new Observable<Date>;
constructor(){
  this.currentTime = interval(1000).pipe(map(()=>new Date))
}
}