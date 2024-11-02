import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarApiService {
  private apiUrl = 'https://cluster.apigratis.com/api/v2';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  // Método para autenticar e obter o token
  authenticate(): Observable<string> {
    const url = `${this.apiUrl}/login`;
    const body = {
      email: '123@1231',
      password: '123456',
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body, { headers }).pipe(
      map((response) => {
        this.token = response.authorization?.token || null;
        
        if (this.token) {
          return this.token;
        } else {
          throw new Error('Falha ao obter o token de autenticação');
        }
      })
    );
  }

  // Método para consultar a placa de um carro
  getCarInfo(placa: string): Observable<any> {
    return this.authenticate().pipe(
      switchMap((token) => {
        const url = `${this.apiUrl}/car-info`;
        const body = { placa };
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          DeviceToken: 'SEU_DEVICE_TOKEN',
          Authorization: `Bearer ${token}`,
        });

        return this.http.post<any>(url, body, { headers });
      })
    );
  }
}
