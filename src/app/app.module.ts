import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingComponent } from './landing/landing.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'
import { NavComponent } from './nav/nav.component'
import { ProjectDetailsComponent } from './project-details/project-details.component'

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		AboutComponent,
		ProjectsComponent,
		NavComponent,
		ProjectDetailsComponent,
	],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
