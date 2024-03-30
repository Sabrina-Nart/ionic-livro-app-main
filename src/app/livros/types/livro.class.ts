import { AutorInterface } from "@autor";
import { LivroInterface } from "./livro.interface";
import { isNumber, isString } from '@functions';

export class Livro {
    id?: number;
    titulo: string;
    subtitulo?: string;
    numeroPaginas: number;
    isbn: string;
    autores: AutorInterface[];
    editora: string;
    ano: number;
    logoUrl: string;
    preco: number;

    constructor(data: LivroInterface) {
        this.id = isNumber(data.id);
        this.titulo = isString(data.titulo);
        this.subtitulo = isString(data.subtitulo);
        this.numeroPaginas = isNumber(data.numeroPaginas);
        this.isbn = isString(data.isbn);
        this.editora = isString(data.editora);
        this.ano = isNumber(data.ano);
        this.logoUrl = isString(data.logoUrl);
        this.preco = isNumber(data.preco);
        this.autores = data.autores;
    }
}


