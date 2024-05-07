import { NgModule } from "@angular/core";
import { LivroRoutingModule } from "./livro-routing.module";
import { IonicModule } from "@ionic/angular";
import { LivroListaComponent } from "./components/livro-lista/livro-lista.component";
import { CommonModule } from "@angular/common";
import { LivroCadastroComponent } from "./components/livro-cadastro/livro-cadastro.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [LivroRoutingModule, CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
    declarations: [LivroListaComponent, LivroCadastroComponent]
})
export class LivroModule { }

/*

1. **Importações**:
    - `NgModule`, `LivroRoutingModule`, `IonicModule` e `CommonModule` são importados do Angular.
    - `LivroRoutingModule` é um módulo de roteamento que define as rotas da aplicação (como explicado no código anterior).
    - `IonicModule` é usado para integração com o framework Ionic.
    - `CommonModule` é um módulo Angular que fornece diretivas comuns, como `ngIf`, `ngFor`, etc.

2. **Configuração do Módulo**:
    - O módulo `LivroModule` é criado.
    - Ele importa os módulos `LivroRoutingModule`, `CommonModule` e `IonicModule`.
    - Os componentes `LivroListaComponent` e `LivroCadastroComponent` são declarados no módulo.

3. **Funcionalidades**:
    - O módulo `LivroModule` gerencia as rotas da aplicação através do `LivroRoutingModule`.
    - Ele também inclui os componentes `LivroListaComponent` e `LivroCadastroComponent`.

Em resumo, esse código configura o módulo `LivroModule` para lidar com as rotas e componentes relacionados à funcionalidade de livros na aplicação Angular. ¹²

*/
