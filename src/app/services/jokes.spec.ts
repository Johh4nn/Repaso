import { TestBed } from '@angular/core/testing';

import { Jokes } from './jokes';

describe('Jokes', () => {
  let service: Jokes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jokes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
