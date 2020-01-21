import { Component, OnInit, HostListener } from '@angular/core';
import projects from "../../assets/projects.json";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  screenHeight: Number;
  screenWidth: Number;
  smallScreen: Boolean;

  constructor() {
    this.projects = projects.projects;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.smallScreen = this.screenWidth < 320;
  }

  ngOnInit() {
  }

}
