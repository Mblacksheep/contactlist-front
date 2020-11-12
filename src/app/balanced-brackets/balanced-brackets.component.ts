import { Component, OnInit } from '@angular/core';
import { BalancedBracketsService } from '../services/balanced-brackets.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-balanced-brackets',
  templateUrl: './balanced-brackets.component.html',
  styleUrls: ['./balanced-brackets.component.css']
})
export class BalancedBracketsComponent implements OnInit {
  brackets = { "value" : null };
  constructor(private balancedBracketsService: BalancedBracketsService) { }

  ngOnInit(): void {
  }

  verify() {
    console.log(this.brackets);
    this.balancedBracketsService.verify({"value": this.brackets.value}).subscribe((data) => {
      if(data.result) {
        Swal.fire({
          title: "String is valid!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "String is not valid!",
          icon: "error",
        });
      }
    });
  }

}
