import { Component, OnDestroy, OnInit } from "@angular/core";
import { LivroService } from "../../services/livro.service";
import { Subscription } from "rxjs";
import { Livro } from "../../types/livro.class";
import { AlertService } from '@services';

@Component({
    templateUrl: './livro-lista.component.html',
    styleUrls: ['./livro-lista.component.scss']
})
export class LivroListaComponent implements OnInit, OnDestroy {

    public livros: Livro[] = [];
    private subscription!: Subscription;

    constructor(
        private livroService: LivroService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}