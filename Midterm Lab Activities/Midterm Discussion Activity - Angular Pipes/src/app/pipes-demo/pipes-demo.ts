import { Component, OnInit } from '@angular/core';
import {
  DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe,
  CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe,
  JsonPipe, TitleCasePipe
} from '@angular/common';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe,
    CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe,
    JsonPipe, TitleCasePipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  // Date & Chained
  presentDate = new Date();

  // Async Pipe
  time$ = interval(1000).pipe(map(() => new Date()));

  // Currency & Decimal
  price: number = 20000;
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  // Slice Pipe
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  // --- 3 Additional Pipes ---
  // 1. Percent Pipe
  growthRate: number = 0.8567;
  // 2. Json Pipe
  userObject = { id: 1, name: 'Mikko', role: 'Developer' };
  // 3. TitleCase Pipe
  welcomeMessage: string = 'welcome to angular pipes demonstration';

  ngOnInit() { }
}
