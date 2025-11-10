import { TestBed } from '@angular/core/testing';

import { Colormagic } from './colormagic';

describe('Colormagic', () => {
  let service: Colormagic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Colormagic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
