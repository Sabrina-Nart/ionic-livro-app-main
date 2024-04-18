import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { GitHubService } from "../../services/git.service";
import { HttpClient } from "@angular/common/http";
import { GitHubResponse } from "../../github.model";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './listagem.component.html'
})
export class GitHubComponent implements OnDestroy {
    form: FormGroup = new FormGroup({
        type: new FormControl('')
    })
    types = ["name"];
    activity = '';
    private subscriptions = new Subscription();

    constructor(private gitHubService: GitHubService) { }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    onSubmit() {
        // const type = this.form.value.type;
        const { type } = this.form.value;
      /*
        const subscription = this.gitHubService.getActivity(type)
            .subscribe(
                (name) => {
                    this.activity = activity;
                },
                (error) => {
                    console.error(error);
                    alert('Error on load response from Bored API')
                }
            );
        this.subscriptions.add(subscription); */
    }

}
