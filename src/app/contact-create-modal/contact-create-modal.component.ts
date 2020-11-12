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
  @Input() personId;
  contact = { id: null, contact_value: '', type: {}, personId: 25 };
  contactForm;
  modalTitle = "Criar Contato";
  contactTypeList = [];
  constructor(
    public activeModal: NgbActiveModal,
    private contactService: ContactService) {
  }

  getContactType() {
    this.contactService.getTypeList().subscribe((data) => {
      this.contactTypeList = data.contactTypeList;
    });
  }

  onSubmit() {
    var payload = {
      "id": this.contact.id,
      "type": this.contact.type,
      "value": this.contact.contact_value,
      "personId": this.personId
    };
    
    this.contactService.create(payload).subscribe((data) => {
      this.activeModal.dismiss();
    });
  }

  ngOnInit(): void {
    this.getContactType();
    if(this.id != null){
      this.modalTitle = "Editar Contato";
      this.contactService.byId(this.id).subscribe((data) => {
        this.contact = data.contact;
        this.contact.type = data.contact.type.id
      });
    }
  }
}