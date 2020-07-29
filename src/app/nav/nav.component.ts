import { Component, OnInit, Input, ElementRef } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
	selector: 'nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
	@Input() onNavigate: Function

	private onProjectDetail = false

	constructor(private ref: ElementRef, private router: Router) {
		router.events.subscribe(e => {
			if (e instanceof NavigationEnd) {
				if (e.url == '/projects') {
					this.onProjectDetail = false
					ref.nativeElement.hidden = false
				} else if (!e.url.indexOf('/projects/')) {
					this.onProjectDetail = true
				} else {
					this.onProjectDetail = false
					ref.nativeElement.hidden = true
				}
			}
		})
	}

	ngOnInit() {}

	hide() {}

	onClick(targetPage: string) {
		this.onNavigate(targetPage)
	}
}
