import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LandingComponent } from './landing/landing.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'
import { ProjectDetailsComponent } from './project-details/project-details.component'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: LandingComponent,
		data: { animation: 'LandingPage' },
	},
	{
		path: 'landing',
		redirectTo: '',
	},
	{
		path: 'about',
		component: AboutComponent,
		data: { animation: 'AboutPage' },
	},
	{
		path: 'projects',
		component: ProjectsComponent,
		data: { animation: 'ProjectsPage' },
	},
	{
		path: 'projects/:id',
		component: ProjectDetailsComponent,
		data: { animation: 'ProjectDetailsPage' },
	},
	{
		path: 'contact',
		component: ContactComponent,
		data: { animation: 'ContactPage' },
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

// platformBrowserDynamic().bootstrapModule(AppRoutingModule);
