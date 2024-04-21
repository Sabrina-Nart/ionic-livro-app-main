import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LivroListaComponent } from "./components/livro-lista/livro-lista.component";
import { LivroCadastroComponent } from "./components/livro-cadastro/livro-cadastro.component";

const routes: Routes = [
    {
        path: '',
        component: LivroListaComponent
    },
    {
        path: 'novo',
        component: LivroCadastroComponent
    },
    {
        path: 'edicao/:id',
        component: LivroCadastroComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LivroRoutingModule { }

/*

Esse código faz parte de um **módulo de roteamento** em uma aplicação Angular. Vou explicar cada parte:

1. **Importações**:
    - `NgModule`, `RouterModule`, e `Routes` são importados do pacote `@angular/router`. O `NgModule` é usado para definir módulos na aplicação Angular, enquanto o `RouterModule` fornece funcionalidades de roteamento.
    - `LivroListaComponent` e `LivroCadastroComponent` são componentes definidos na aplicação.

2. **Definição das Rotas**:
    - O array `routes` contém as rotas da aplicação. Cada rota é um objeto com as seguintes propriedades:
        - `path`: Define o caminho da URL para a rota.
        - `component`: Especifica o componente que será carregado quando a rota for acessada.
    - As rotas definidas são:
        - Rota vazia (`path: ''`): Quando a URL não possui nenhum segmento adicional, o componente `LivroListaComponent` será carregado.
        - Rota 'novo' (`path: 'novo'`): Quando a URL possui o segmento 'novo', o componente `LivroCadastroComponent` será carregado.
        - Rota 'edicao/:id' (`path: 'edicao/:id'`): Quando a URL possui o segmento 'edicao' seguido por um parâmetro `id`, o componente `LivroCadastroComponent` será carregado.

3. **NgModule**:
    - O `NgModule` chamado `LivroRoutingModule` é criado.
    - Ele importa o módulo de roteamento (`RouterModule.forChild(routes)`) e exporta o mesmo (para que outros módulos possam utilizá-lo).
    - O módulo de roteamento é configurado com as rotas definidas no array `routes`.

Em resumo, esse código configura as rotas da aplicação Angular, associando caminhos de URL a componentes específicos. Quando a URL é acessada, o componente correspondente é carregado. O módulo `LivroRoutingModule` é utilizado para gerenciar essas rotas. ¹²

*/
