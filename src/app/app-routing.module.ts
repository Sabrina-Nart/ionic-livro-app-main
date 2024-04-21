import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'autores',
    loadChildren: () =>
      import('./autores/autores.module').then((m) => m.AutoresPageModule),
  },
  {
    path: 'livros',
    loadChildren: () => import('./livros/livro.module').then(module => module.LivroModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//Rotas -Pega o que foi feito nas pastas e faz aparecer na web

/*

Declarações de Importação:
      O código importa vários módulos e classes das bibliotecas Angular e Ionic.
      Aqui está o que cada declaração de importação faz:
            NgModule é importado de @angular/core.
            PreloadAllModules, RouterModule e Routes são importados de @angular/router.

Configuração de Rotas:
      O array routes define as rotas do aplicativo.
      Cada objeto de rota possui as seguintes propriedades:
          path: O caminho da rota (por exemplo, ‘home’, ‘autores’, ‘livros’).
          redirectTo: Redireciona para outra rota (por exemplo, ‘home’).
          loadChildren: Carrega um módulo assincronamente quando a rota é acessada.
    Usa a função import() para carregar o módulo especificado (por exemplo, ‘home/home.module’).
  Essas rotas serão usadas pelo Angular Router para navegar entre as páginas do aplicativo.

NgModule:
      O decorador @NgModule é usado para definir o módulo principal do aplicativo.
      Dentro do decorador, configuramos o módulo:
          imports: Importa o módulo de roteamento com as rotas definidas.
              Usa a estratégia de pré-carregamento PreloadAllModules.
          exports: Exporta o módulo de roteamento para uso em outras partes do aplicativo.

Em resumo, este código configura as rotas do aplicativo e define o módulo principal.

*/
