import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarApiService } from '../car-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  placa: string = '';
  carInfo: any | null = null;
  errorMessage: string = '';

  constructor(private carApiService: CarApiService) {}

  // Método para buscar as informações do carro
  searchCar() {
    this.carApiService.getCarInfo(this.placa).subscribe(
      (response) => {
        if (!response.error) {
          this.carInfo = response.response;
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Erro ao buscar as informações do carro.';
        }
      },
      (error) => {
        this.errorMessage =
          'Erro na consulta. Verifique os dados e tente novamente.';
      }
    );
  }
}
