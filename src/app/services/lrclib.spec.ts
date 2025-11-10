import { TestBed } from '@angular/core/testing';

import { Lrclib } from './lrclib';

describe('Lrclib', () => {
  let service: Lrclib;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lrclib);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
