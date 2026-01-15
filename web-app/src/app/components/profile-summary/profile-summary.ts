import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  imports: [],
  templateUrl: './profile-summary.html',
  styleUrl: './profile-summary.css',
})
export class ProfileSummary implements AfterViewInit {

  ngAfterViewInit(): void {
    this.observeFade();
  }

  private observeFade() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-up')
      .forEach(el => observer.observe(el));
  }
}
