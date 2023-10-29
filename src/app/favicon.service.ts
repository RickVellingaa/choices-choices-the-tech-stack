import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  constructor(private http: HttpClient) {}

  getFavicon(url: string) {
    // Maak een HTTP GET-verzoek naar de API-URL en retourneer de respons als een Observable
    return this.http.get(
      `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}`
    );
  }
}
