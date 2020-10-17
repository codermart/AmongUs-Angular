import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input("categories") categories: Category[] = [];
  selectedCategoryId = 1;
  @Output() onCategoryClicked: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCategoryClick = (categoryId) => {
    this.onCategoryClicked.emit(categoryId);
    this.selectedCategoryId = categoryId;
  }
}
