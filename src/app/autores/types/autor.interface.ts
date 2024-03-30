import { GeneroEnum } from './genero.enum';

export interface AutorInterface {
  id?: number | null;
  nome: string;
  dataNascimento: Date;
  genero: GeneroEnum;
}
