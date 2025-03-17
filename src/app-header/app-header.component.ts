import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  isCartPanelOpen = false;

  constructor(public cartService: CartService) {}

  ngOnInit() {
  }

  toggleCartPanel(event: Event) {
    event.preventDefault();
    this.isCartPanelOpen = !this.isCartPanelOpen;
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  @HostListener('document:click', ['$event'])
  closeCartPanel(event: Event) {
    const cartElement = (event.target as HTMLElement).closest('.cart');
    if (!cartElement) {
      this.isCartPanelOpen = false;
    }
  }
}