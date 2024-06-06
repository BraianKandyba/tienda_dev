import { Component } from '@angular/core';
import { Productos } from '../../modelos/productos';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.scss'
})
export class AccesoriosComponent {

  productosAccesorios: Productos[] = [
    { id: 1, nombre: 'Escritorio Gamer', precio: 35000, cantidad: 1 },
    { id: 2, nombre: 'Mouse Logiteg R12', precio: 15000, cantidad: 1 },
    { id: 3, nombre: 'Mouse Logiteg PW13', precio: 10000, cantidad: 1 },
    { id: 4, nombre: 'MousePad', precio: 11000, cantidad: 1 },
    { id: 5, nombre: 'Teclado gamer ZX24 PRO', precio: 25000, cantidad: 1 },
    { id: 6, nombre: 'Teclado mecanico rx109', precio: 35000, cantidad: 1 },
  ];

  constructor(private cartService: CarritoService) {}

  ngOnInit(): void {}

  addToCart(product: Productos) {
    this.cartService.addToCart(product);
  }

}
