import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './people-create-modal.component.html'
})
export class PeopleCreateModalContent implements OnInit {
  @Input() id;
  person = { "id": null, "name": ''};
  personForm;
  modalTitle = "Criar Pessoa";
  
  constructor(
    public activeModal: NgbActiveModal,
    private peopleService: PeopleService) {
    // this.personForm = new FormGroup({
    //   id: new FormControl(null),
    //   name: new FormControl(null),
    // });
  }

  onSubmit() {
    this.peopleService.create(this.person).subscribe((data) => {
      this.activeModal.dismiss();
    });
  }

  ngOnInit(): void {
    if(this.id != null){
      this.modalTitle = "Editar Pessoa";
      this.peopleService.byId(this.id).subscribe((data) => {
        this.person = data.person;
      });
    }
  }
}