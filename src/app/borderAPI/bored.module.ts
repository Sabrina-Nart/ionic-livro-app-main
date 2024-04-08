import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui
import { HttpClientModule } from '@angular/common/http';
import { BoredComponent } from './components/bored.component';


@NgModule({
  declarations: [BoredComponent],
  imports: [CommonModule, FormsModule, HttpClientModule], // Adicione o FormsModule aqui
  providers: [], // Se houver serviços a serem fornecidos aqui
})
export class BoredModule {}




/*
import { NgModule } from "@angular/core";
import { LivroRoutingModule } from "./livro-routing.module";
import { IonicModule } from "@ionic/angular";
import { LivroListaComponent } from "./components/livro-lista/livro-lista.component";
import { CommonModule } from "@angular/common";
import { LivroCadastroComponent } from "./components/livro-cadastro/livro-cadastro.component";

@NgModule({
    imports: [LivroRoutingModule, CommonModule, IonicModule],
    declarations: [LivroListaComponent, LivroCadastroComponent]
})
export class LivroModule { }

*/
