import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPets } from '../pets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  serverUrl = '/api';
  constructor(private http: HttpClient) {}

  getPet(petId): Observable<IPets> {
    return this.http.get<IPets>(this.serverUrl + '/pet', {
      params: { id: petId }
    });
  }

  getPets(): Observable<IPets[]> {
    return this.http.get<IPets[]>(this.serverUrl + '/pets');
  }

  registerPet(data) {
    console.log('Register pet: ' + data);
    return this.http.post<any>(this.serverUrl + '/addDog', data);
  }

  uploadImage(image: File) {
    const fd = new FormData();
    fd.append('image', image, image.name);
    return this.http.post<any>(this.serverUrl + '/uploadImage', fd);
  }
}
