import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent implements OnInit {
  person;
  personForm;

  constructor(
    private peopleService: PeopleService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.personForm = new FormGroup({
      name: new FormControl(null),
    });
  }

  onSubmit(person) {
    this.peopleService.create(person).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if(id != null){
      this.peopleService.byId(id).subscribe((data) => {
        this.person = data.person;
        this.personForm.patchValue({
          name: this.person.name
        });
      });
    }
  }

}
