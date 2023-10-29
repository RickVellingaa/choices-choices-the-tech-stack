import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent implements OnInit {
  faviconAPI: string = '';
  entry: titleData = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.getEntryBySlug(slug);
      } else {
        console.log('De partner bestaat niet');
      }
    });
  }

  getEntryBySlug(slug: string) {
    this.faviconAPI =
      'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=';
    client
      .getEntries({
        content_type: 'websites',
        'fields.slug[match]': slug,
      })
      .then((response) => {
        if (response.items.length > 0) {
          const item = response.items[0];
          this.entry = item.fields;
          console.log(this.entry);
        } else {
          console.log('Geen item gevonden voor:', slug);
        }
      })
      .catch(console.error);
  }
}
