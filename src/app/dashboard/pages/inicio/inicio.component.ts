import { Component } from '@angular/core';
import { Productos } from '../../modelos/productos';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  productosAccesorios: Productos[] = [
    { id: 1, nombre: 'Escritorio Gamer', precio: 35000, cantidad: 1 },
    { id: 2, nombre: 'Mouse Logiteg R12', precio: 15000, cantidad: 1 },
    { id: 3, nombre: 'Mouse Logiteg PW13', precio: 10000, cantidad: 1 },
    { id: 4, nombre: 'MousePad', precio: 11000, cantidad: 1 },
    { id: 5, nombre: 'Teclado gamer ZX24 PRO', precio: 25000, cantidad: 1 },
    { id: 6, nombre: 'Teclado mecanico rx109', precio: 35000, cantidad: 1 },
  ];

  productosComputadoras: Productos[] = [
    { id: 7, nombre: 'Monitor 4k', precio: 25000, cantidad: 1 },
    { id: 8, nombre: 'Monitor 8K', precio: 35000, cantidad: 1 },
    { id: 9, nombre: 'Pc gamer 1802CD', precio: 335000, cantidad: 1 },
    { id: 10, nombre: 'Pc gamer 112CxX', precio: 435000, cantidad: 1 },
    { id: 11, nombre: 'Pc gamer 1080GTXF', precio: 535000, cantidad: 1 },
    { id: 12, nombre: 'Laptop 18012XDA', precio: 235000, cantidad: 1 },
  ];

  productosRopa: Productos[] = [
    { id: 13, nombre: 'Remera git', precio: 20000, cantidad: 1 },
    { id: 14, nombre: 'Remera Sass', precio: 20000, cantidad: 1 },
    { id: 15, nombre: 'Remera Angular', precio: 20000, cantidad: 1 },
    { id: 16, nombre: 'Remera NodeJs', precio: 20000, cantidad: 1 },
    { id: 17, nombre: 'Remera Html5', precio: 20000, cantidad: 1 },
    { id: 18, nombre: 'Gorra Dev', precio: 20000, cantidad: 1 },
  ];

  constructor(private carritoService: CarritoService) {}

  

  addToCart(product: Productos) {
    this.carritoService.addToCart(product);
  }


}
