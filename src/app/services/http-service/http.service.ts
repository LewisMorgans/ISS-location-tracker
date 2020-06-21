import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private endPoint = 'https://api.wheretheiss.at/v1/satellites/25544';

    constructor(private readonly _http: HttpClient) { }

    getLocation$(): Observable<ISSResponse> {
        return this._http.get<ISSResponse>(this.endPoint);
    }
}

