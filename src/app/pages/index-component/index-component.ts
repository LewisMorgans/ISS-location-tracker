import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'index-component',
  templateUrl: './index-component.html',
  styleUrls: ['./index-component.css']
})

export class IndexComponent implements OnInit {

  public sateliteData$: Observable<ISSResponse> = this._httpService.getLocation$().pipe(
    tap(x => console.log('LOG: ', x))
  )

  constructor(private readonly _httpService: HttpService) { }

  ngOnInit() {     
  }

}
