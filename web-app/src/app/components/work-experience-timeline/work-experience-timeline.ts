import { Component, OnInit } from '@angular/core';
import { CompanyCard } from "../company-card/company-card";
import Company from '../../models/company';

@Component({
  selector: 'app-work-experience-timeline',
  imports: [CompanyCard],
  templateUrl: './work-experience-timeline.html',
  styleUrl: './work-experience-timeline.css',
})
export class WorkExperienceTimeline implements OnInit{
  public companies:Company[] = [];
  
  ngOnInit(): void {
    this.companies = this.getCompanies();
  }

  getCompanies():Company[] {
    return [
      {
        name: 'Nagarro',
        designation: 'Associate Staff Engineer',
        startDate: '21st Nov 2021',
        endDate: 'Present',
        isCurrent: true,
        logoUrl: 'assets/img/NagarroLogo.png', 
        points: [
        'Designed and developed scalable backend services using .NET Core and EF Core.',
        'Built responsive Angular applications with reusable components.',
        'Collaborated with cross-functional teams to deliver enterprise-grade solutions.',
        'Improved performance using SOLID principles and design patterns.'
      ] 
      },
      {
        name: 'American Epay System Pvt Ltd',
        designation: 'Software Engineer',
        startDate: '18th Dec 2018',
        endDate: '21th Nov 2021',
        isCurrent: false,
        logoUrl: 'assets/img/epaysystem.png',  
        points: [
        'Leading cloud-native development on Microsoft Azure.',
        'Architected microservices using .NET and Docker.',
        'Implemented CI/CD pipelines and DevOps best practices.',
        'Mentoring developers and conducting code reviews.'
      ]
      }
    ]as Company[];
  }

}
