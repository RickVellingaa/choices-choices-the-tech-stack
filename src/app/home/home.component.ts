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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faviconAPI: string = ''; // Standaardwaarde toekennen
  entries: titleData[] = [];

  constructor() {}

  ngOnInit() {
    this.faviconAPI =
      'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=';
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
