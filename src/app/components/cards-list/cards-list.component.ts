import { Component, Input, OnInit } from '@angular/core';
import { LocationContent } from 'src/app/types/location.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: LocationContent[] = [];

  constructor() {}

  ngOnInit(): void {}
}
