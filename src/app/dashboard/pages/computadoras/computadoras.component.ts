import { Component } from '@angular/core';
import { Productos } from '../../modelos/productos';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styleUrl: './computadoras.component.scss'
})
export class ComputadorasComponent {

  productosComputadoras: Productos[] = [
    { id: 7, nombre: 'Monitor 4k', precio: 25000, cantidad: 1 },
    { id: 8, nombre: 'Monitor 8K', precio: 35000, cantidad: 1 },
    { id: 9, nombre: 'Pc gamer 1802CD', precio: 335000, cantidad: 1 },
    { id: 10, nombre: 'Pc gamer 112CxX', precio: 435000, cantidad: 1 },
    { id: 11, nombre: 'Pc gamer 1080GTXF', precio: 535000, cantidad: 1 },
    { id: 12, nombre: 'Laptop 18012XDA', precio: 235000, cantidad: 1 },
  ];

  constructor(private cartService: CarritoService) {}

  ngOnInit(): void {}

  addToCart(product: Productos) {
    this.cartService.addToCart(product);
  }

}
