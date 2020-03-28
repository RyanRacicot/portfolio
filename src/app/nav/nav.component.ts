import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
	@Input() onNavigate: Function

	constructor() {}

	ngOnInit() {}

	onClick(targetPage: string) {
		this.onNavigate(targetPage)
	}
}
