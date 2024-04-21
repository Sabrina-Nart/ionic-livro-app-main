import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*

1. **Componente Angular**:
    - A classe `HomePage` é um componente Angular que representa a página inicial do aplicativo.
    - Ele é decorado com o seletor `'app-home'`, o que significa que ele será usado como uma tag `<app-home>` no arquivo HTML para renderizar essa página.

2. **Método `ngOnInit()`**:
    - O método `ngOnInit()` é um gancho de ciclo de vida do Angular.
    - Ele é chamado automaticamente quando o componente é inicializado.
    - É um bom lugar para executar inicializações, como buscar dados ou configurar variáveis.

3. **Construtor**:
    - O construtor da classe é chamado quando uma instância do componente é criada.
    - No exemplo fornecido, o construtor está vazio, mas normalmente é usado para injetar serviços ou realizar outras tarefas de inicialização.

4. **Arquivos de Template e Estilos**:
    - O componente `HomePage` usa um arquivo de template HTML (`./home.page.html`) e um arquivo de estilos CSS (`./home.page.scss`).
    - Esses arquivos contêm o conteúdo visual e estilização específica para essa página.

Em resumo, a classe `HomePage` é um componente Angular que representa a página inicial do aplicativo. O método `ngOnInit()` pode ser usado para executar tarefas de inicialização específicas para essa página.

*/
