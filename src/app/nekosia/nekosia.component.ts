import { Component } from '@angular/core';
import { NekosiaApiService } from '../nekosia-api.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-nekosia',
  standalone: true,
  templateUrl: './nekosia.component.html',
  styleUrls: ['./nekosia.component.scss'],
  imports: [CommonModule, HeaderComponent],
})
export class NekosiaComponent {
  categories = [
    'catgirl',
    'foxgirl',
    'wolf-girl',
    'animal-ears',
    'tail',
    'cute',
    'maid',
    'uniform',
    'sailor-uniform',
    'blue-archive',
  ];

  images: { url: string; character: string }[] = [];
  errorMessage: string | null = null;

  constructor(private nekosiaApiService: NekosiaApiService) {}

  fetchImage(category: string) {
    this.nekosiaApiService.getImagesByCategory(category).subscribe(
      (data) => {
        this.images.push(data);
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar imagem.' + error;
      }
    );
  }
}
