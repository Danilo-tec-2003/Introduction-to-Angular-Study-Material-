# 🚀 Introdução ao Angular

Este repositório contém anotações e códigos sobre conceitos fundamentais do Angular. O objetivo é documentar o aprendizado e facilitar revisões futuras.

## 📌 O que é Angular?
Angular é um framework para construção de aplicações web SPA (Single Page Application). Ele utiliza TypeScript como linguagem principal e segue o padrão MVC para organização de código.

## 📂 Estrutura do Projeto
Aqui está a estrutura básica de um projeto Angular:

```
📦 nome-do-projeto
 ┣ 📂 src/
 ┃ ┣ 📂 app/
 ┃ ┃ ┣ 📂 components/       # Componentes da aplicação
 ┃ ┃ ┣ 📂 services/         # Serviços utilizados no projeto
 ┃ ┃ ┣ app.module.ts        # Módulo principal
 ┃ ┃ ┣ app.component.ts     # Componente raiz
 ┃ ┃ ┣ app.routes.ts        # Definição de rotas
 ┃ ┣ index.html             # Arquivo principal renderizado no navegador
 ┃ ┣ main.ts                # Ponto de entrada da aplicação
 ┃ ┣ styles.css             # Estilos globais
```

## 🏗️ Componentes no Angular
Cada componente possui os seguintes arquivos:

| Arquivo             | Função                                      |
|---------------------|---------------------------------------------|
| `.component.html`   | Define o layout do componente.             |
| `.component.css`    | Estilos específicos do componente.         |
| `.component.ts`     | Contém a lógica do componente.             |
| `.component.spec.ts`| Arquivo para testes unitários.             |

### Criando um Novo Componente
Para criar um novo componente, utilize o comando:
```sh
ng generate component components/nome-do-componente
```
Em seguida, importe o componente no `app.module.ts` e utilize no HTML:
```html
<app-nome-do-componente></app-nome-do-componente>
```

## 🔀 Rotas no Angular
Para definir rotas, utilize `app.routes.ts`:
```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
];
```
Assim, ao acessar `http://localhost:4200/home`, o `HomeComponent` será exibido.

## ⚡ Comandos Essenciais

| Comando | Descrição |
|---------|-----------|
| `ng new nome-do-projeto` | Cria um novo projeto Angular |
| `ng serve` | Inicia o servidor de desenvolvimento |
| `ng generate component nome-do-componente` | Gera um novo componente |
| `ng g service nome-do-service` | Gera um novo service |

## 🛠️ Exemplo de Service
```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {
  enviaInformacaoParaoBack(info: string) {
    console.log("Enviando para o backend:", info);
  }
}
