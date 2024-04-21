import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Livro } from '../types/livro.class';
import { Observable, map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LivroService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getLivros(): Observable<Livro[]> {
        return this.httpClient
            .get<Livro[]>('http://localhost:3000/livros')
            .pipe(
                tap((data) => console.log('Data: ', data)),
                map((data) => {
                    return data.map(item => new Livro(item))
                }),
                tap((data) => console.log('Data: ', data)),
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
