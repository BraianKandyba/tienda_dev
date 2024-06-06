import { Component } from '@angular/core';
import { Productos } from '../../modelos/productos';
import { CarritoService } from '../../../servicios/carrito.service';


@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrl: './ropa.component.scss'
})
export class RopaComponent {
  productosRopa: Productos[] = [
    { id: 13, nombre: 'Remera git', precio: 20000, cantidad: 1 },
    { id: 14, nombre: 'Remera Sass', precio: 20000, cantidad: 1 },
    { id: 15, nombre: 'Remera Angular', precio: 20000, cantidad: 1 },
    { id: 16, nombre: 'Remera NodeJs', precio: 20000, cantidad: 1 },
    { id: 17, nombre: 'Remera Html5', precio: 20000, cantidad: 1 },
    { id: 18, nombre: 'Gorra Dev', precio: 20000, cantidad: 1 },
  ];


  constructor(private cartService: CarritoService) {}

  ngOnInit(): void {}

  addToCart(product: Productos) {
    this.cartService.addToCart(product);
  }




}
