import { Component, OnInit } from '@angular/core';
import Skill from '../../models/skill';
import { SkillCard } from "../skill-card/skill-card";

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  ngOnInit(): void {
    this.skills = this.getSkills();
  }
  skills: Skill[] = [];

  getSkills() {
    return [
      { 
        title: 'Web / IoT Development', subtitle:'Full-stack & cloud-integrated applications',
        favSkils: ['.NET Core', 'EF Core', 'Angular','MS SQL','Docker','Azure Cloud','InfluxDB'], 
        nonFavSkills: ['ReactJS','ASP.NET Web Forms','Grafana','RabbitMQ'] 
      },
      { 
        title: 'Tools / Platforms', subtitle:'Development & productivity tools',
        favSkils: ['Azure DevOps', 'Git', 'GitHub','Visual Studio','VS Code','SSMS','Postman'], 
        nonFavSkills: ['SVN','Figma'] 
      },
      { 
        title: 'Programming', subtitle:'Core languages & fundamentals',
        favSkils: ['C#', 'HTML', 'CSS','JavaScript','SQL','TypeScript'], 
        nonFavSkills: [] 
      },
      
    ] as Skill[];
  }
}
