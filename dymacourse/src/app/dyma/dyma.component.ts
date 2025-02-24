import { Component, signal, linkedSignal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product{
  name: string;
  price: number;
  langue: string[];
}
@Component({
  selector: 'app-dyma',
  imports: [FormsModule],
  template: `
  <select [ngModel]= "selectedProduct()" (ngModelChange)="selectedProduct.set($event)">
  <option disabled [value]= "null">choose a product</option>
  @for (product of products(); track product.name){
    <option [ngValue]= "product">{{product.name}}</option>
  }
  </select>
  <hr/>
<input [ngModel]="quantity()" (ngModelChange)="quantity.set($event)" type="number" />
<hr/>

@if (selectedProduct()){

  <select [ngModel]= "selectedLang()" (ngModelChange)="selectedLang.set($event)">
  <option disabled [value]= "null">choose a lang</option>
  @for (lang of selectedProduct()?.langue; track $index){
    <option [ngValue]= "lang">{{lang}}</option>
  }
  </select>

}
<hr/>
  <h1> Prix: {{ price() }}</h1>
  `,
  styles:``,
})
export class DymaComponent {
  products = signal<Product[]>([

    {
      name: 'Cz Shadow 2',
      price: 1800,
      langue: ['fr', 'en'],
    },
    {
      name: 'Glock 17',
      price: 600,
      langue: ['es', 'en'],
    }
  ]);
  
  selectedProduct = signal<Product | null>(null);
  selectedLang = linkedSignal(() => this.selectedProduct()?.langue[0]);
  quantity = linkedSignal(
    {
      source: this.selectedProduct,
      computation: () => 1,
    }
  );

  price = computed(() =>  (this.selectedProduct()?.price || 0) * this.quantity());
}