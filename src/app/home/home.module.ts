import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})

export class HomePageModule {}

/*

1. **Configuração do Módulo**:
    - O módulo `HomePageModule` é definido aqui.
    - Ele importa os seguintes módulos:
        - `CommonModule`: Fornece diretivas comuns, como `ngIf` e `ngFor`.
        - `FormsModule`: Fornece suporte para formulários de modelo.
        - `IonicModule`: Fornece componentes e recursos específicos do Ionic.
        - `HomePageRoutingModule`: Importa as rotas específicas para a página inicial.

2. **Declarações**:
    - O componente `HomePage` é declarado neste módulo.
    - Isso significa que ele pode ser usado em outros lugares do aplicativo.

3. **Observações**:
    - O arquivo de template HTML e o arquivo de estilos CSS para a página inicial devem estar localizados no mesmo diretório que o arquivo `home.page.ts`.

Em resumo, este módulo configura a página inicial do aplicativo, importando os módulos necessários e declarando o componente `HomePage`.

*/
