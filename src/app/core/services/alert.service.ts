import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(
        private toastController: ToastController
    ) { }

    error(message: string) {
        this.toastController
            .create({
                position: 'top',
                message,
                duration: 5000,
                color: 'danger',
            }).then((t) => t.present());
    }
}

/*

1. **Classe do Serviço**:
    - A classe `AlertService` é definida como um serviço Angular.
    - Ela é decorada com `@Injectable({ providedIn: 'root' })`, o que significa que o serviço é injetável em qualquer parte da aplicação.

2. **Construtor**:
    - O construtor recebe uma instância do serviço `ToastController`. O `ToastController` é usado para exibir mensagens de notificação (toast) na interface do usuário.

3. **Método `error(message: string)`**:
    - Esse método é responsável por exibir uma mensagem de erro (toast) na parte superior da tela.
    - Ele cria um toast com as seguintes configurações:
        - `position`: Define a posição do toast (no topo).
        - `message`: A mensagem de erro a ser exibida.
        - `duration`: A duração em milissegundos que o toast ficará visível (neste caso, 5000 ms ou 5 segundos).
        - `color`: Define a cor do toast (vermelho, indicando erro).
    - O método `then()` é usado para apresentar o toast após a criação.

Em resumo, o `AlertService` é usado para exibir mensagens de erro na forma de toasts para o usuário. Essas mensagens podem ser usadas para notificar sobre erros, problemas ou situações excepcionais na aplicação.

*/
