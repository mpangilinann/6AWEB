import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myservice } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';
import { Employee } from './employee';
import { Product } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-services-demo');

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public products: {
    productId: string;
    productName: string;
    description: string;
    price: number;
  }[] = [];

  constructor(
    private employeeService: Employee,
    private productsService: Product
  ) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productsService.getProducts();
  }
}
