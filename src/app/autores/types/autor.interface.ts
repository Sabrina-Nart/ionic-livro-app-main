import { GeneroEnum } from './genero.enum';

export interface AutorInterface {
  id?: string | null;
  nome: string;
  dataNascimento: Date;
  genero: GeneroEnum;
}
