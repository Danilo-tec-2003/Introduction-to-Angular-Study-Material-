import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Faz com que o serviço esteja disponível globalmente no projeto
})
export class EnviaFormularioService {
  constructor() { }

  // Método responsável por simular o envio de informações para o backend
  enviaInformacaoParaoBack(info: string) {
    console.log("Enviando para o backend: ", info);
  }
}