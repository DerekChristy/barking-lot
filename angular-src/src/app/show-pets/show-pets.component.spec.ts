import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPetsComponent } from './show-pets.component';

describe('ShowPetsComponent', () => {
  let component: ShowPetsComponent;
  let fixture: ComponentFixture<ShowPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
