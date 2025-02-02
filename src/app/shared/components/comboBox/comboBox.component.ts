import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-comboBox',
  templateUrl: './comboBox.component.html',
  styleUrls: ['./comboBox.component.css'],
  standalone: true,
  imports: [DropdownModule, FormsModule]
})
export class ComboBoxComponent implements OnInit {
  @Input() selected: any = null
  @Input() optionLabel: string = ''
  @Input() optionValue: string = ''
  @Input() placeholder: string = ''
  @Input() SelectedValue: any = null
  @Input() DefaultClearValue: any = 0;
  @Input() dataSource: Array<any> = []
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  @Output() SelectedValueChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.selected = this.dataSource.find(x => x[this.optionValue] == this.SelectedValue)
  }
  selectedItem(item: any) {
    this.selectedChange.emit(item);
    if (item[this.optionValue] != undefined) {
      this.SelectedValueChange.emit(item[this.optionValue]);
    }
    else {
      this.SelectedValueChange.emit(null);
    }
  }
  clear() {
    this.SelectedValue = null;
    this.selectedChange.emit(null);
    this.SelectedValueChange.emit(this.DefaultClearValue);
  }
}
