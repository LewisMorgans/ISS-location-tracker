import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks, flush } from '@angular/core/testing';
import { IndexComponent } from './index-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

describe('IndexComponentComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  let mockMapsAPILoader = {
    load: () => new Promise(resolve => resolve(true))
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent],
      imports: [
        HttpClientTestingModule,
        AgmCoreModule.forRoot()
      ],
      providers: [
        { provide: MapsAPILoader, useValue: mockMapsAPILoader }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
  });


  it('The observale should be populated with the return value from the HTTP service', fakeAsync(() => {
    component.sateliteData$
      .subscribe(data => {
        expect(data.iss_position).toContain('latitude')
      })
    tick(5000);
    discardPeriodicTasks();
  }));

  it('Should call the [IntializeState] function and set the IconUrl', () => {
    expect(component.iconUrl).toBeUndefined
    component.ngOnInit();
    expect(component.iconUrl).toEqual({
      url: "https://image.flaticon.com/icons/svg/547/547424.svg",
      scaledSize: {
        height: 40,
        width: 40
      }
    })
  })

  it('Should update zoom level', () => {
    expect(component.zoom).toBe(2);
    component.updateZoomInput(10);
    expect(component.zoom).toBe(10);
  })
});
