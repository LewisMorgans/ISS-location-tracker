import { HttpService } from './http.service'
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(('HttpService Test'), () => {

    let service: HttpService;
    let _httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
        }).compileComponents();
        service = TestBed.inject(HttpService);
        _httpMock = TestBed.inject(HttpTestingController);

    }));

    it('Should make a GET request to the API and return mock lat long values', () => {

        const API = 'http://api.open-notify.org/iss-now.json';

        service.getLocation$()
            .subscribe(resp => {
                expect(resp).toEqual({ iss_position: { latitude: 0.12345, longitude: -12345 } })
            })

        const _req = _httpMock.expectOne({
            url: API,
            method: 'GET'
        }).flush({
            iss_position: {
                latitude: 0.12345,
                longitude: -12345
            }
        })

    });

    afterEach(() => {
        _httpMock.verify();
    });

})