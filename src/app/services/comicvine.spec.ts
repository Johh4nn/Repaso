import { TestBed } from '@angular/core/testing';

import { Comicvine } from './comicvine';

describe('Comicvine', () => {
  let service: Comicvine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comicvine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
