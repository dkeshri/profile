import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience implements OnInit {

  index = 0;

  experiences = [
    {
      company: 'Nagarro India',
      period: '2021 – Present',
      desc: 'IoT Platform, Terminal Management System',
      tech: '.NET Core, Angular, Azure, Docker'
    },
    {
      company: 'American Epay Systems',
      period: '2018 – 2021',
      desc: 'Payroll & attendance management systems',
      tech: '.NET Web API, Angular, MS SQL'
    },
    {
      company: 'Blueforce-6',
      period: 'US Army Project',
      desc: 'Okta authentication & security APIs',
      tech: 'C#, Okta, REST APIs'
    }
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.experiences.length;
    }, 4000);
  }
}
