import { NgModule } from "@angular/core";
import { GitHubComponent } from "./components/git_listagem/listagem.component";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [{
    path: 'api_github',
    component: GitHubComponent,
}]

@NgModule({
    declarations: [GitHubComponent],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, IonicModule, RouterModule.forChild(routes)]
})
export class listagemModule { }
