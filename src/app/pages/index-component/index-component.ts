import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http.service';
import { Observable, interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators'

@Component({
  selector: 'index-component',
  templateUrl: './index-component.html',
  styleUrls: ['./index-component.css']
})

export class IndexComponent {

  public iconUrl = "https://image.flaticon.com/icons/svg/547/547424.svg";
  public initSateliteLocation$: Observable<ISSResponse> = this._httpService.getLocation$();
  public sateliteData$: Observable<ISSResponse> = interval(5000)
  .pipe(
    startWith(this._httpService.getLocation$()),
    switchMap(_ => this._httpService.getLocation$()),
  )

  constructor(private readonly _httpService: HttpService) { }


}
