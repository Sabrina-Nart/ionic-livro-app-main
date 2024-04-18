import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { GitHubResponse } from "../github.model";

@Injectable({ providedIn: 'root' })
export class GitHubService {

    constructor(private httpClient: HttpClient) { }

    getUsers(name: string): Observable<string> {

        return this.httpClient.get<GitHubService>(
            'https://api.github.com/users/' + name
        )/*.pipe(
            map((response) => response.users)
        ) */
    }
}
