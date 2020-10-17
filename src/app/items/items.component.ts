import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Item } from '../model/item';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnChanges {
  
  @Output()
  onItemClicked: EventEmitter<number> = new EventEmitter();

  selectedItemId: number;
  @Input('currentSelectedItem')
  currentSelectedItem: number;

  @Input('items') items: Item[];

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItemId = this.currentSelectedItem;
  }

  onItemClick = (itemId) => {
    this.onItemClicked.emit(itemId);
    this.selectedItemId = itemId;
  };
}
