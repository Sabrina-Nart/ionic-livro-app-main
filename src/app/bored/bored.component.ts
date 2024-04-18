import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BoredService } from "./bored.service";
import { HttpClient } from "@angular/common/http";
import { BoredResponse } from "./bored.model";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './bored.component.html'
})
export class BoredComponent implements OnDestroy {
    form: FormGroup = new FormGroup({
        type: new FormControl('')
    })
    types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
    activity = '';
    private subscriptions = new Subscription();

    constructor(private boredService: BoredService) { }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    onSubmit() {
        // const type = this.form.value.type;
        const { type } = this.form.value;

        const subscription = this.boredService.getActivity(type)
            .subscribe(
                (activity) => {
                    this.activity = activity;
                },
                (error) => {
                    console.error(error);
                    alert('Error on load response from Bored API')
                }
            );
        this.subscriptions.add(subscription);
    }

}
