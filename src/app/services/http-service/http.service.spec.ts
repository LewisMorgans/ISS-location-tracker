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

    it('Should make a GET request to the API and return lat long values', () => {

        service.getLocation$()
            .subscribe(resp => {
                expect(resp.iss_position).toContain('latitude', 'longitude');
            })

        const req = _httpMock.expectOne({
            url: 'http://api.open-notify.org/iss-now.json',
            method: 'GET'
        })

        expect(req.request.method).toBe("GET");

    });

    afterEach(() => {
        _httpMock.verify();
    });

})