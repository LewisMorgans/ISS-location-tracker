import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http.service';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'index-component',
  templateUrl: './index-component.html',
  styleUrls: ['./index-component.css']
})

export class IndexComponent {

  public sateliteData$: Observable<ISSResponse> = interval(5000)
    .pipe(
      switchMap(_ => this._httpService.getLocation$())
    );

  constructor(private readonly _httpService: HttpService) { }

}
