import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { faTrashAlt, faPen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleCreateModalContent } from '../people-create-modal/people-create-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList = [];
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  faPlusSquare = faPlusSquare;

  constructor(
    private peopleService: PeopleService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  create() {
    const modalRef = this.modalService.open(PeopleCreateModalContent);
    modalRef.dismissed.subscribe(() => {
      this.getAll();
    })
  }

  edit(id) {
    const modalRef = this.modalService.open(PeopleCreateModalContent);
    modalRef.componentInstance.id = id;
    modalRef.dismissed.subscribe(() => {
      this.getAll();
    })
  }

  contacts(id) {
    this.router.navigate(['/contacts/list',  {id: id}]);
  }

  getAll(){
    this.peopleService.all().subscribe((data) => {
      this.peopleList = data.peopleList;
    })
    return true;
  }

  delete(id) {
    this.peopleService.delete({id :id}).subscribe((data) => {
      this.getAll();
    })
  }
}
