import { Component, OnInit } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

type titleData = {
  [x: string]: any;
};

const client = createClient({
  space: environment.apiSpace,
  accessToken: environment.apiKey,
});

@Component({
  selector: 'app-principes',
  templateUrl: './principes.component.html',
  styleUrls: ['./principes.component.css'],
})
export class PrincipesComponent implements OnInit {
  entries: titleData[] = [];

  constructor() {}

  ngOnInit() {
    client
      .getEntries({
        content_type: 'websites',
      })
      .then((response) => {
        this.entries = response.items.map((item) => item.fields);
        console.log('Artikelen:', this.entries);
      })
      .catch(console.error);
  }
}
