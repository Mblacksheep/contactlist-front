import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { faTrashAlt, faPen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactCreateModalContent } from '../contact-create-modal/contact-create-modal.component';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  contactList = [];
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  faPlusSquare = faPlusSquare;
  person;

  constructor(
    private contactService: ContactService,
    private personService: PeopleService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute) { }

  onSubmit(person) {
    this.contactService.create(person).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if(id != null && id != ''){
      this.personService.byId(id).subscribe((data) => {
        this.person = data.person
      });
      
      this.personContacts(id);
    } else {
      this.router.navigate(['/people/list']);
    }
  }

  personContacts(id){
    this.contactService.list({"personId": id}).subscribe((data) => {
      this.contactList = data.contactList;
    })
  }

  create() {
    const modalRef = this.modalService.open(ContactCreateModalContent);
    modalRef.dismissed.subscribe(() => {
      this.personContacts(this.person.id);
    })
  }

  edit(id) {
    const modalRef = this.modalService.open(ContactCreateModalContent);
    modalRef.componentInstance.id = id;
    modalRef.dismissed.subscribe(() => {
      this.personContacts(this.person.id);
    })
  }
  
  delete(id) {
    this.contactService.delete({id :id}).subscribe((data) => {
      this.personContacts(this.person.id);
    })
  }

}
