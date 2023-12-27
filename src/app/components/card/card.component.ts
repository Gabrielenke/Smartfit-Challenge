import { Component, Input, OnInit } from '@angular/core';
import { LocationContent } from 'src/app/types/location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: LocationContent;

  constructor() {}

  ngOnInit(): void {}
}
