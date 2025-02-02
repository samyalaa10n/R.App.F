import { Component, OnInit, ViewChild } from '@angular/core';
import { GetAddEditDeleteComponent } from "../../../shared/pages/get-add-edit-delete/get-add-edit-delete.component";
import { DataGridComponent } from "../../../shared/components/dataGrid/dataGrid.component";
import { Tools } from '../../../shared/service/Tools';
import { ComboBoxComponent } from "../../../shared/components/comboBox/comboBox.component";
import { Column } from '../../../shared/components/dataGrid/Column';
import { EmployeSelectionComponent } from "../EmployeSelection/EmployeSelection.component";

@Component({
  selector: 'app-Effect',
  templateUrl: './Effect.component.html',
  styleUrls: ['./Effect.component.css'],
  imports: [DataGridComponent, ComboBoxComponent, EmployeSelectionComponent]
})
export class EffectComponent implements OnInit {
  @ViewChild('grid') grid!: DataGridComponent
  effects: Array<any> = [];
  colsInfo: Array<any> = [];
  empeloyee: Array<any> = [];
  Columns: Array<Column> = [];
  constructor(private _tools: Tools) { }

  async ngOnInit() {
    this.effects = await this._tools.getAsync("EffectInSystem") as Array<any>
    this.colsInfo = await this._tools.getAsync("EffectColumn") as Array<any>;
    this.empeloyee = await this._tools.getAsync("Employee") as Array<any>;
  }

  async selectChange(effect: any) {
    this.Columns = [];
    (effect.COLUMNS as Array<any>).forEach((col, index) => {
      let columnG = new Column(`row_${this.ColumnInfo(col).ID}`, this.ColumnInfo(col).COLUMN_NAME)
      this.getTypeColumn(col, columnG)
      this.Columns.push(columnG)
    })
    this.grid.Columns = this.Columns
    this.grid.dataSource = [];
  }
  ColumnInfo(col: any) {
    return this.colsInfo.find(x => x.ID == col.EFFECT_COLUMN_ID);
  }
  getTypeColumn(col: any, column: Column) {
    column.columnType = "text";
    column.width = 100;
  }
}
