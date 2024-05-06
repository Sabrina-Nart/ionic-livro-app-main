import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import ptBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      { provide: LOCALE_ID, useValue: 'pt-BR' },
      {
        provide: DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
      },
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }

/*

Declarações de Importação:
      O código importa vários módulos e classes das bibliotecas Angular e Ionic.
      Aqui está o que cada declaração de importação faz:
            NgModule é importado de @angular/core.
            BrowserModule é importado de @angular/platform-browser.
            RouteReuseStrategy é importado de @angular/router.
            IonicModule e IonicRouteStrategy são importados de @ionic/angular.

Decorador NgModule:
      O decorador @NgModule é usado para definir um módulo Angular.
      Dentro do decorador, configuramos o módulo especificando várias propriedades:
            declarations: Uma matriz de componentes, diretivas e pipes que pertencem a este módulo. Neste caso, apenas o AppComponent é declarado.
            imports: Uma matriz de outros módulos dos quais este módulo depende. Aqui, importamos BrowserModule, IonicModule e o AppRoutingModule.
            providers: Uma matriz de serviços ou provedores que podem ser injetados em componentes. O IonicRouteStrategy é fornecido como uma estratégia de reutilização de rotas.
            bootstrap: O componente raiz que será inicializado quando o aplicativo for iniciado. Neste caso, é o AppComponent.

Exportação:
      A classe AppModule é exportada, tornando-a disponível para uso em outras partes do aplicativo.
      Em resumo, este código define o módulo principal de um aplicativo Angular, configura as dependências necessárias e especifica o componente raiz a ser carregado quando o aplicativo é iniciado.

*/
