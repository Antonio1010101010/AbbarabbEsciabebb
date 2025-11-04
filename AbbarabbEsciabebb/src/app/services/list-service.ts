import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ListService {
private firebaseDB = environment.firebaseDB + 'lista.json';
constructor(private http: HttpClient) {}
aggiungiElemento(elemento: string) {
const nuovoElemento = { nome: elemento };
return this.http.post(this.firebaseDB, nuovoElemento);
}
}
