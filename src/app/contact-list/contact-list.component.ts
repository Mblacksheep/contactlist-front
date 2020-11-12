import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { faTrashAlt, faPen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactCreateModalContent } from '../contact-create-modal/contact-create-modal.component';

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
  
  constructor(
    private contactService: ContactService,
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

  edit(id) {
    const modalRef = this.modalService.open(ContactCreateModalContent);
    modalRef.componentInstance.id = id;
    modalRef.dismissed.subscribe(() => {
      // this.getAll();
    })
  }
  
  delete(id) {
    this.contactService.delete({id :id}).subscribe((data) => {
      // this.personContacts();
    })
  }

}
