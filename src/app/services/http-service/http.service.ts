import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private endPoint = 'http://api.open-notify.org/iss-now.json';

    constructor(private readonly _http: HttpClient) { }

    getLocation$(): Observable<ISSResponse> {
        return this._http.get<ISSResponse>(this.endPoint);
    }
}

