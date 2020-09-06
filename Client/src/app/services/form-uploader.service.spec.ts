import { TestBed } from '@angular/core/testing';

import { FormUploaderService } from './form-uploader.service';

describe('FormUploaderService', () => {
  let service: FormUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
