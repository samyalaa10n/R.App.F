import { Component, OnInit, ViewChild } from '@angular/core';
import { GetAddEditDeleteComponent } from "../../../shared/pages/get-add-edit-delete/get-add-edit-delete.component";
import { DataGridComponent } from "../../../shared/components/dataGrid/dataGrid.component";
import { Tools } from '../../../shared/service/Tools';

@Component({
  selector: 'app-Effect',
  templateUrl: './Effect.component.html',
  styleUrls: ['./Effect.component.css'],
  imports: [DataGridComponent]
})
export class EffectComponent implements OnInit {
  @ViewChild('grid') grid!: DataGridComponent
constructor(private _tools: Tools) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this._tools.waitExecuteFunction(100, () => {
    
    })
  }
}
