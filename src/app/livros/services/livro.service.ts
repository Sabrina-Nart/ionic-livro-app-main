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