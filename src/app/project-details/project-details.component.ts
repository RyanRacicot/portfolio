import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import projects from "../../assets/projects.json";

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  routeId: any;
  projects: any;
  project: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.projects = projects.projects;

    this.route.params.subscribe(params => {
      this.routeId = eval(params.id)[1];
    });

    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].title == this.routeId) {
        this.project = this.projects[i];
        break;
      }
    }
  }

}
