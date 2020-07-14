import { Component, OnInit, Input, ElementRef } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
	selector: 'nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
	@Input() onNavigate: Function

	constructor(private ref: ElementRef, private router: Router) {
		router.events.subscribe(e => {
			if (e instanceof NavigationEnd) {
				switch (e.url) {
					case '/projects':
						ref.nativeElement.hidden = false
						break

					default:
						ref.nativeElement.hidden = true
						break
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
