import { TestBed } from '@angular/core/testing';

import { TodoCreationService } from './todo-creation.service';

describe('TodoCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoCreationService = TestBed.get(TodoCreationService);
    expect(service).toBeTruthy();
  });
});
