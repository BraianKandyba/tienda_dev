import { Component } from '@angular/core';
import { CarritoService } from '../../../servicios/carrito.service';
import { Productos } from '../../modelos/productos';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  items: Productos[] = [];
  total: number =0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.items = this.carritoService.getItems();
    this.calcularTotal()
  }

  clearCart() {
    this.items = this.carritoService.clearCart();
    this.total = 0;
  }

  removeFromCart(product: Productos) {
    this.carritoService.removeFromCart(product);
  }


  calcularTotal(){
    this.total = this.carritoService.getTotal();
  }

  finalizarCompra(){
    this.carritoService.finalizar();

    setTimeout(()=>{
      this.clearCart()
    },2000)

  }

}
