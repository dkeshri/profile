import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'web-app';
  year = new Date().getFullYear();

  @ViewChild('slider', { static: false }) slider!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    // no-op; ViewChild ready for scroll actions
  }

  private scroll(amount: number) {
    if (!this.slider) return;
    this.slider.nativeElement.scrollBy({ left: amount, behavior: 'smooth' });
  }

  scrollLeft() {
    this.scroll(-320);
  }

  scrollRight() {
    this.scroll(320);
  }
}
