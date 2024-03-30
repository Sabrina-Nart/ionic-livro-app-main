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