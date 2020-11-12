import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCreateModalComponent } from './people-create-modal.component';

describe('PeopleCreateModalComponent', () => {
  let component: PeopleCreateModalComponent;
  let fixture: ComponentFixture<PeopleCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
