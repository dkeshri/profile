import { Component } from '@angular/core';
import { MobleMenu } from "../moble-menu/moble-menu";

@Component({
  selector: 'app-header',
  imports: [MobleMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileMenuOpen = false;
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
