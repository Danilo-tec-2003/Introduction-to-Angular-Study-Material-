import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home', // Define o seletor do componente
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {               
  // Injetando o serviço dentro do componente
  private enviaFormularioService = inject(EnviaFormularioService);

  // Declaração de propriedades
  name = "Danilo";
  idButton = "TESTE";
  deveMostrarTitulo = true;
  listItems = ["Banana", "Maçã", "Melão"];

  // Método chamado ao clicar no botão
  submit() {                  
    this.enviaFormularioService.enviaInformacaoParaoBack("Enviando informação para o backend");
  }
}