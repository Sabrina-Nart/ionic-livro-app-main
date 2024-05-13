import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Livro } from '../types/livro.class';
import { Observable, map, tap } from "rxjs";
import { LivroInterface } from "../types/livro.interface";

@Injectable({
    providedIn: 'root'
})
export class LivroService {


    API_URL = 'http://localhost:3000/livros/';

    constructor(
        private httpClient: HttpClient
    ) { }

    save(livro: any) {
        return this.httpClient
            .post<LivroInterface>(this.API_URL, livro);
    }

    getLivro(id: string) {
        return this.httpClient.get<LivroInterface>(this.API_URL + id);
    }

    getLivros(): Observable<Livro[]> {
        return this.httpClient
            .get<Livro[]>(this.API_URL)
            .pipe(
                tap((data) => console.log('Data: ', data)),
                map((data) => {
                    return data.map(item => new Livro(item))
                }),
                tap((data) => console.log('Data: ', data)),
            )
    }

    update(id: string, livro: any) {
        return this.httpClient.put(
            this.API_URL + id, livro
        )
    }

    remove(livro: Livro) {
        return this.httpClient.delete(
            this.API_URL + livro.id
        )
    }
}

/*

Este trecho de código representa o **serviço Angular** chamado `LivroService`. Vamos analisar cada parte:

1. **Classe do Serviço**:
    - A classe `LivroService` é definida como um serviço Angular.
    - Ela é decorada com `@Injectable({ providedIn: 'root' })`, o que significa que o serviço é injetável em qualquer parte da aplicação.

2. **Construtor**:
    - O construtor recebe uma instância do serviço `HttpClient`. O `HttpClient` é usado para fazer requisições HTTP.

3. **Método `getLivros()`**:
    - Esse método faz uma requisição HTTP GET para a URL `'http://localhost:3000/livros'`.
    - Ele retorna um `Observable` que emite uma lista de objetos do tipo `Livro`.
    - A lógica do método inclui:
        - `tap()`: Exibe os dados recebidos no console.
        - `map()`: Mapeia os dados recebidos para objetos do tipo `Livro`.
        - `tap()`: Exibe os dados mapeados no console.

Em resumo, o `LivroService` é responsável por buscar informações sobre livros através de uma requisição HTTP e transformá-las em objetos `Livro`. ¹²

*/
