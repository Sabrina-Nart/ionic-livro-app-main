import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutorInterface } from '../../types/autor.interface';
import { AutorService } from '../../services/autor.service';
import { GeneroEnum } from '../../types/genero.enum';
import { AlertService } from '@services';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {
  autorId: string | null;
  autoresForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.autorId = null;
    this.autoresForm = this.createForm();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.autorId = id;
      this.autorService.getAutor(this.autorId).subscribe((autor) => {
        this.autoresForm = this.createForm(autor);
      });
    }
  }

  private createForm(autor?: AutorInterface) {
    return new FormGroup({
      nome: new FormControl(autor?.nome || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      dataNascimento: new FormControl(
        autor?.dataNascimento || new Date().toISOString()
      ),
      genero: new FormControl(
        autor?.genero || GeneroEnum.FEMININO,
        Validators.required
      ),
    });
  }

  salvar() {
    const autor: AutorInterface = {
      ...this.autoresForm.value,
    };
    if (this.autorId) {
      autor.id = this.autorId;
    }
    this.autorService.salvar(autor).subscribe(
      () => this.router.navigate(['autores']),
      (erro) => {
        console.error(erro);
        this.alertService.error(
          `Não foi possível salvar o autor: ${erro.error.message}`
        );
      }
    );
  }

  get nome() {
    return this.autoresForm.get('nome');
  }
}
