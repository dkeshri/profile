import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";  
@Component({
  selector: 'app-base-layout',
  imports: [ButtonModule, Header, Footer],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css',
})
export class BaseLayout {

}
