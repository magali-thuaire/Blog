import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-post-list-item',
	templateUrl: './post-list-item.component.html',
	styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() post;

	constructor() { }

	ngOnInit() {
	}

	// Fonction qui augmente le loveIts d'un article de 1
	onLove() {
		this.post.loveIts += 1;
	}

	// Fonction qui baisse le loveIts d'un article de 1
	onDontLove() {
		this.post.loveIts -= 1;
	}

}
