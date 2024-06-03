import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


@Injectable({
  providedIn: 'root'
})

export class PhotosDataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  getAllPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.apiUrl);
  }
}
