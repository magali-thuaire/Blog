import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Date actuelle
	date = new Date();

	// Tableau des articles
	posts = [
		{
			title: 'Article 1',
			content: 'Je suis l\'article 1',
			loveIts: 5,
			created_at: this.date
		},
		{
			title: 'Article 2',
			content: 'Je suis l\'article 2',
			loveIts: 0,
			created_at: this.date
		},
		{
			title: 'Article 3',
			content: 'Je suis l\'article 3',
			loveIts: -5,
			created_at: this.date
		}
	];
}
