import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';

import { SomeService } from './some.service';

// describe('Bad', () => {
//   let service: SomeService;
//   const response = { id: 1, name: 'aaa' };

//   beforeEach(() => {

//     TestBed.configureTestingModule({
//       providers: [
//         { provide: HttpClient, useValue: { get: () => Rx.of(response) } },
//       ]
//     });
//   });

//   it('should be return config', () => {
//     service = TestBed.get(SomeService);

//     service.getConfig().subscribe((config) => {
//       expect(config).toBe(response);
//     });
//   });
// });


describe('Good', () => {
  let httpTestingController: HttpTestingController;
  let service: SomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SomeService);
  });

  it('should be return config', () => {
    const response = { id: 1, name: 'aaa' };

    service.getConfig().subscribe((config) => {
      expect(config).toBe(response);
    });

    const req = httpTestingController.expectOne('/config');
    expect(req.request.method).toEqual('GET');
    req.flush(response);

    httpTestingController.verify();
  });
});
