import { Component, OnInit } from '@angular/core';
import { BalancedBracketsService } from '../services/balanced-brackets.service';

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
      console.log(data);
    });
  }

}
