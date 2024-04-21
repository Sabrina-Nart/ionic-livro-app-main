import { Component, OnDestroy, OnInit } from "@angular/core";
import { AutorInterface, AutorService } from "@autor";
import { AlertService } from "@services";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './livro-cadastro.component.html'
})
export class LivroCadastroComponent implements OnInit, OnDestroy {

    autores: AutorInterface[] = [];

    private subscriptions = new Subscription();

    constructor(
        private autorService: AutorService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void { //Lógica para carregar os autores
        this.carregaAutores() //Por causa da ComboBox
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    carregaAutores() {
        const subscription = this.autorService.getAutores().subscribe(
            (autores) => {
                console.log(autores);
                this.autores = autores;
            },
            (error) => {
                console.error(error);
                this.alertService.error('Não foi possível carregar os autores. Tente novamente mais tarde')

            }
        )
        this.subscriptions.add(subscription);
    }

    compareWith(o1: AutorInterface, o2: AutorInterface) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
}


/*

1. **Classe do Componente**:
    - A classe `LivroCadastroComponent` é definida.
    - Ela implementa as interfaces `OnInit` e `OnDestroy`, o que significa que ela possui métodos que serão executados quando o componente for inicializado e quando ele for destruído.

2. **Propriedades**:
    - `autores`: É uma propriedade que armazena uma lista de objetos do tipo `AutorInterface`. Esses objetos representam informações sobre autores de livros.

3. **Métodos**:
    - `ngOnInit()`: Esse método é chamado quando o componente é inicializado. Ele contém a lógica para carregar os autores, provavelmente para preencher uma caixa de seleção (ComboBox) no formulário.
    - `ngOnDestroy()`: Esse método é chamado quando o componente é destruído. Ele é usado para cancelar assinaturas de observáveis ou liberar recursos.

4. **Lógica de Carregamento de Autores**:
    - O método `carregaAutores()` é responsável por buscar os autores através do serviço `AutorService`.
    - Se a busca for bem-sucedida, a lista de autores é atribuída à propriedade `autores`.
    - Caso ocorra algum erro na busca, uma mensagem de erro é exibida através do serviço `AlertService`.

5. **Função `compareWith`**:
    - Essa função é usada para comparar dois objetos do tipo `AutorInterface`.
    - Ela verifica se os objetos têm o mesmo ID e retorna `true` se forem iguais.

Em resumo, o `LivroCadastroComponent` é responsável por carregar informações sobre autores e gerenciar a seleção de autores em um formulário de cadastro de livros. ¹²

*/
