import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http.service';
import { Observable, interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators'

@Component({
  selector: 'index-component',
  templateUrl: './index-component.html',
  styleUrls: ['./index-component.scss']
})

export class IndexComponent implements OnInit {

  public iconUrl: Object;
  public zoom = 2;
  public sateliteData$: Observable<ISSResponse> = interval(5000)
    .pipe(
      startWith(this._httpService.getLocation$()),
      switchMap(_ => this._httpService.getLocation$()),
    )

  constructor(private readonly _httpService: HttpService) { }

  ngOnInit() {
    this.initializeState();
  }

  public updateZoomInput(event: number) {
    this.zoom = event;
  }

  private initializeState(): void {
    this.iconUrl = {
      url: "https://image.flaticon.com/icons/svg/547/547424.svg",
      scaledSize: {
        height: 40,
        width: 40
      }
    }
  }
}
