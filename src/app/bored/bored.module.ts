import { NgModule } from "@angular/core";
import { BoredComponent } from "./bored.component";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [{
    path: 'bored',
    component: BoredComponent,
}]

@NgModule({
    declarations: [BoredComponent],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, IonicModule, RouterModule.forChild(routes)]
})
export class BoredModule { }
