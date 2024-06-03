import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDataService } from './photos-data.service';

interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title= 'photos-viewer';
  photos: Photos[] = [];
  errorMessage!: string;

  constructor(private data_service: PhotosDataService) {}

  ngOnInit() {
    this.data_service.getAllPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
        console.log(this.photos);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}