import { TestBed } from '@angular/core/testing';
import * as Rx from 'rxjs';

import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// describe('Bad', () => {
//   let service: UserService = null;
//   const subject$ = new Rx.Subject();
//   const response = { id: 1, name: 'foo' };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientModule,
//       ],
//     });

//     spyOn(TestBed.get(HttpClient), 'get').and.returnValue(subject$);
//     service = TestBed.get(UserService);
//   });

//   it('should be return response', () => {
//     service.getUser(1).subscribe((user) => {
//       console.info('==========この部分は通過しないため期待したテストが実行されていない==========');
//       expect(user.id).toBe(10000000000);
//       expect(user.name).toBe('fooooooooooooooo');
//     });
//   });
// });

describe('Good', () => {
  let service: UserService = null;
  const subject$ = new Rx.Subject();
  const response = { id: 1, name: 'foo' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });

    spyOn(TestBed.get(HttpClient), 'get').and.returnValue(subject$);
    service = TestBed.get(UserService);
  });

  it('should be return response', (done) => {
    service.getUser(1).subscribe((user) => {
      expect(user.id).toBe(1);
      expect(user.name).toBe('foo');
      done();
    });
    subject$.next(response);
  });
});
