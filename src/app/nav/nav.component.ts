import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() onNavigate: Function;

  constructor() { }

  ngOnInit() {
  }

  onClick(targetPage: string) {
    this.onNavigate(targetPage);
  }

  // onAbout() {
  //   this.onNavigate('about');
  // }

  // onProjects() {
  //   this.onNavigate('projects');
  // }

  // onContact() {
  //   this.onNavigate('contact');
  // }

  // onHome() {
  //   this.onNavigate('home');
  // }

}
