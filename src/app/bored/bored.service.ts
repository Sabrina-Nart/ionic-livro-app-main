import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { BoredResponse } from "./bored.model";

@Injectable({ providedIn: 'root' })
export class BoredService {

    constructor(private httpClient: HttpClient) { }

    getActivity(type: string): Observable<string> {

        return this.httpClient.get<BoredResponse>(
            'http://www.boredapi.com/api/activity?type=' + type
        ).pipe(
            map((response) => response.activity)
        )
    }
}
