import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root', // Define o seletor do componente para ser usado no HTML
  imports: [RouterOutlet, HomeComponent], // Importação de módulos para roteamento e componente Home
  templateUrl: './app.component.html', // Template associado ao componente
  styleUrl: './app.component.css' // Estilos do componente
})
export class AppComponent {
  title = 'conhecendo-angular'; // Propriedade que pode ser usada no template
}