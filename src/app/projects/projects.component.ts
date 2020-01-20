import { Component, OnInit } from '@angular/core';
import projects from "../../assets/projects.json";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor() {
    this.projects = projects.projects;
  }

  ngOnInit() {
  }

}
