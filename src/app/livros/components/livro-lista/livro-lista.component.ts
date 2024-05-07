import { Component, OnDestroy, OnInit } from "@angular/core";
import { LivroService } from "../../services/livro.service";
import { Subscription } from "rxjs";
import { Livro } from "../../types/livro.class";
import { AlertService } from '@services';
import { AlertController, ViewWillEnter } from "@ionic/angular";

@Component({
    templateUrl: './livro-lista.component.html',
    styleUrls: ['./livro-lista.component.scss']
})

export class LivroListaComponent implements OnInit, OnDestroy, ViewWillEnter {

    public livros: Livro[] = [];
    private subscription!: Subscription;

    constructor(
        private livroService: LivroService,
        private alertService: AlertService,
        private alertController: AlertController,
    ) { }

    ionViewWillEnter(): void {
        this.listagem();
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    listagem() {
        this.subscription = this.livroService
            .getLivros()
            .subscribe(
                (response) => {
                    console.log('Response: ', response);
                    this.livros = response;
                },
                (error) => {
                    console.error(error);
                    this.alertService.error('Erro ao carregar listagem de livros');
                }
            );
    }

    excluir(livro: Livro) {
        this.alertController
            .create({
                header: 'Confirmação de exclusão',
                message: `Deseja excluir o livro ${livro.titulo}?`,
                buttons: [
                    {
                        text: 'Sim',
                        handler: () => {
                            this.livroService
                                .remove(livro)
                                .subscribe({
                                    next: () => {
                                        this.livros = this.livros.filter(
                                            l => l.id !== livro.id
                                        )
                                    },
                                    error: (error) => {
                                        console.error(error);
                                        this.alertService.error('Não foi possível excluir o livro!');
                                    }
                                });;
                        },
                    },
                    {
                        text: 'Não',
                    },
                ],
            })
            .then((alerta) => alerta.present());
    }
}

/*

Este trecho de código representa o **componente Angular** chamado `LivroListaComponent`. Vamos analisar cada parte:

1. **Classe do Componente**:
    - A classe `LivroListaComponent` é definida.
    - Ela implementa as interfaces `OnInit` e `OnDestroy`, o que significa que ela possui métodos que serão executados quando o componente for inicializado e quando ele for destruído.

2. **Propriedades**:
    - `livros`: É uma propriedade que armazena uma lista de objetos do tipo `Livro`. Esses objetos representam informações sobre os livros a serem exibidos na lista.

3. **Métodos**:
    - `ngOnInit()`: Esse método é chamado quando o componente é inicializado. Ele contém a lógica para buscar os livros através do serviço `LivroService`.
    - `ngOnDestroy()`: Esse método é chamado quando o componente é destruído. Ele é usado para cancelar assinaturas de observáveis ou liberar recursos.

4. **Lógica de Carregamento de Livros**:
    - O método `getLivros()` do serviço `LivroService` é chamado para buscar os livros.
    - Se a busca for bem-sucedida, a lista de livros é atribuída à propriedade `livros`.
    - Caso ocorra algum erro na busca, uma mensagem de erro é exibida através do serviço `AlertService`.

Em resumo, o `LivroListaComponent` é responsável por exibir uma lista de livros na interface do aplicativo, obtendo os dados do serviço `LivroService`.

*/
