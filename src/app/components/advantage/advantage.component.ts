import { Component, Input, OnInit } from '@angular/core';
import { AdvantageType } from 'src/app/types/advantage.type';

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() index: number;

  isExpanded: boolean = false; 

  constructor() {
    this.advantage = {
      title: '',
      description: ''
    };
    this.index = 0;
   }

  ngOnInit(): void {}

  toggleText(): void {
    this.isExpanded = !this.isExpanded;
  }

}
