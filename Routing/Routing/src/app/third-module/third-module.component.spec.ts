import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdModuleComponent } from './third-module.component';

describe('ThirdModuleComponent', () => {
  let component: ThirdModuleComponent;
  let fixture: ComponentFixture<ThirdModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
