import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateModalContent } from './contact-create-modal.component';

describe('ContactCreateModalContent', () => {
  let component: ContactCreateModalContent;
  let fixture: ComponentFixture<ContactCreateModalContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCreateModalContent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
