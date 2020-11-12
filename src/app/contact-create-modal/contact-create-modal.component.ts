import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './contact-create-modal.component.html'
})
export class ContactCreateModalContent implements OnInit {
  @Input() id;
  contact;
  contactForm;
  modalTitle = "Criar Contato";
  
  constructor(
    public activeModal: NgbActiveModal,
    private contactService: ContactService) {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      contact_value: new FormControl(null),
    });
  }

  onSubmit(contact) {
    this.contactService.create(contact).subscribe((data) => {
      this.activeModal.dismiss();
    });
  }

  ngOnInit(): void {
    if(this.id != null){
      this.modalTitle = "Editar Contato";
      this.contactService.byId(this.id).subscribe((data) => {
        this.contact = data.contact;
        this.contactForm.patchValue({
          id: this.contact.id,
          contact_value: this.contact.contact_value,
        });
      });
    }
  }
}