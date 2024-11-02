import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NekosiaApiService {
  private baseUrl = 'https://api.nekosia.cat/api/v1';

  constructor(private http: HttpClient) {}

  getImagesByCategory(
    category: string,
    count: number = 1
  ): Observable<{ url: string; character: string }> {
    const url = `${this.baseUrl}/images/${category}?count=${count}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<any>(url, { headers }).pipe(
      map((response) => {
        if (response.success && response.image.compressed.url) {
          // original/compressed
          return {
            url: response.image.compressed.url,
            character: response.anime.character || 'Desconhecida',
          };
        } else {
          throw new Error('Error');
        }
      })
    );
  }
}
