import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
	selector: 'landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	private bg
	private divider
	private iconBar
	private left
	private right

	constructor() {}

	ngOnInit() {
		this.bg = document.getElementById('bg')
		this.divider = document.getElementById('divider')
		this.iconBar = document.getElementById('icons')
		this.left = document.getElementById('left')
		this.right = document.getElementById('right')
		document.getElementsByTagName

		// Large Screen
		if (window.innerWidth >= 576) {
			this.bg.classList.add('justify-content-center', 'align-content-center')
			this.divider.hidden = true

			// Move icon bar
			this.iconBar.parentNode.removeChild(this.iconBar)
			this.left.appendChild(this.iconBar)

			this.right.style['text-align'] = 'left'
			let textItems = document.getElementsByTagName('ul')
			for (let i = 0; i < textItems.length; i++) {
				textItems[i].style.top = '50%'
				textItems[i].style.transform = 'translateY(-50%)'
			}
		}
	}

	onResize(event) {
		// Small
		if (event.target.innerWidth < 576) {
			this.bg.classList.remove('justify-content-center', 'align-content-center')
			this.divider.hidden = false
			// Move icon bar
			this.iconBar.parentNode.removeChild(this.iconBar)
			this.right.appendChild(this.iconBar)
			this.right.style['text-align'] = 'center'
			let textItems = document.getElementsByTagName('ul')

			for (let i = 0; i < textItems.length; i++) {
				textItems[i].style.top = '0'
				textItems[i].style.transform = ''
			}
		} else {
			// Large Screen
			this.divider.hidden = true
			this.bg.classList.add('justify-content-center', 'align-content-center')
			this.right.style['text-align'] = 'left'
			let textItems = document.getElementsByTagName('ul')

			for (let i = 0; i < textItems.length; i++) {
				textItems[i].style.top = '50%'
				textItems[i].style.transform = 'translateY(-50%)'
			}

			// Move icon bar
			this.iconBar.parentNode.removeChild(this.iconBar)
			this.left.appendChild(this.iconBar)
		}
	}
}
