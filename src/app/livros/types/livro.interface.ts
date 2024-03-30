import { AutorInterface } from 'src/app/autores/types/autor.interface';

export interface LivroInterface {
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
}
