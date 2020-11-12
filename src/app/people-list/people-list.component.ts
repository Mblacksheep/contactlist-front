import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../services/people.service';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList = [];
  faTrashAlt = faTrashAlt;
  faPen = faPen;

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getById(id) {
    this.router.navigate(["/people/create", { id:id }]);
  }

  getAll() {
    this.peopleService.all().subscribe((data) => {
      this.peopleList = data.peopleList;
    })
  }

  delete(id) {
    this.peopleService.delete({id :id}).subscribe((data) => {
      this.getAll();
    })
  }
}
