import { Component } from '@angular/core';
import { SocialMediaIcons } from "../social-media-icons/social-media-icons";

@Component({
  selector: 'app-footer',
  imports: [SocialMediaIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear: number = new Date().getFullYear();
}
