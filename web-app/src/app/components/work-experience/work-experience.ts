import { Component, OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
@Component({
  selector: 'app-work-experience',
  imports: [Carousel, ButtonModule, Tag],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience implements OnInit {

  index = 0;
  products = [
    {
    name: 'deeepak ', 
    image:'galleria/galleria1.jpg',
    price:20,
    inventoryStatus:'INSTOCK'
    },
    {
    name: 'shunham ',
    price:20,
    image:'galleria/galleria2.jpg',
    inventoryStatus:'LOWSTOCK'
    },
    {
    name: 'pradepe',
    price:20,
    image:'galleria/galleria2.jpg',
    inventoryStatus:'LOWSTOCK'
    }
  ];
  responsiveOptions: any[] | undefined;


  ngOnInit(): void {
    this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
  }

  getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'info';
        }
    }
}
