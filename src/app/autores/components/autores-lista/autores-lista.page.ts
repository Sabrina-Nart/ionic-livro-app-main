import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ToastController,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { AutorInterface } from '../../types/autor.interface';
import { AutorService } from '../../services/autor.service';
import { AlertService } from '@services';

@Component({
  selector: 'app-autores',
  templateUrl: './autores-lista.page.html',
  styleUrls: ['./autores-lista.page.scss'],
})
export class AutoresListaComponent
  implements OnInit, ViewWillEnter, ViewDidLeave, ViewWillLeave, ViewDidLeave {
  autores: AutorInterface[] = [];

  constructor(
    private alertController: AlertController,
    private autorService: AutorService,
    private alertService: AlertService
  ) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.listar();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnInit() { }

  listar() {
    const observable = this.autorService.getAutores();
    observable.subscribe(
      (dados) => {
        this.autores = dados;
      },
      (erro) => {
        console.error(erro);
        this.alertService.error('Erro ao carregar listagem de autores');
      }
    );
  }

  confirmarExclusao(autor: AutorInterface) {
    this.alertController
      .create({
        header: 'Confirmação de exclusão',
        message: `Deseja excluir o autor ${autor.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.excluir(autor),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alerta) => alerta.present());
  }

  private excluir(autor: AutorInterface) {
    if (autor.id) {
      this.autorService.excluir(autor.id).subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.alertService.error(`Não foi possível excluir o autor ${autor.nome}`);
        }
      );
    }
  }
}
