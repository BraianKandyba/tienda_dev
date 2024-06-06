import { Injectable, inject } from '@angular/core';

import { Productos } from '../dashboard/modelos/productos';



@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private items: Productos[] = [];

  addToCart(product: Productos) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.cantidad += 1;
    } else {
      this.items.push({...product, cantidad: 1});
    }
    this.showNotification(`${product.nombre} agregado al carrito`);
  }

  removeFromCart(product: Productos) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index > -1) {
      if (this.items[index].cantidad > 1) {
        this.items[index].cantidad -= 1;
      } else {
        this.items.splice(index, 1);
      }
    }
    this.showNotification(`${product.nombre} removido al carrito`);

  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotal() {
    const total = this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
    return total
  }

  finalizar(){
    const mensajeTotal = this.getTotal()
    this.showNotification(`Compra Finalizada Total: ${mensajeTotal}  `);
  }

  showNotification(message: string) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('fade-out');
      notification.addEventListener('transitionend', () => {
        notification.remove();
      });
    }, 2000);
  }



  
}
