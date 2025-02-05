import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataGridComponent } from '../../../shared/components/dataGrid/dataGrid.component';
import { Tools } from '../../../shared/service/Tools';
import { ComboBoxComponent } from "../../../shared/components/comboBox/comboBox.component";
import { Column } from '../../../shared/components/dataGrid/Column';
import { DialogModule } from "primeng/dialog"
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-EmployeSelection',
  templateUrl: './EmployeSelection.component.html',
  styleUrls: ['./EmployeSelection.component.css'],
  imports: [DataGridComponent, ComboBoxComponent, DialogModule, ButtonModule],
  standalone: true,
})
export class EmployeSelectionComponent implements OnInit {
  Departs: Array<any> = [];
  LABEL: string = "بحث عن موظف"
  showDailog: boolean = false;
  @Output() onSelected: EventEmitter<any> = new EventEmitter();
  @ViewChild('grid') grid!: DataGridComponent
  constructor(private _tools: Tools) { }
  async ngOnInit() {
    this.Departs = await this._tools.getAsync("Depart") as Array<any>
  }
  ngAfterViewInit() {
    this._tools.waitExecuteFunction(100, () => {
      this.grid.AllowDelete = false;
      this.grid.AllowSave = false;
      this.grid.AllowSearch = false;
      this.grid.AllowUpdate = false;
      this.grid.AllowAdd = false;
      this.grid.AllowDeleteSelected = false;
      this.grid.canSlectedSomeColumns = false;
      this.grid.AllowHeaderTemplate = false;
      this.grid.Columns.push(new Column("CODE", "كود الموظف"));
      this.grid.Columns.push(new Column("NAME", "اسم الموظف"));
      this.grid.Columns.push(new Column("Depart", "قسم الموظف"));
      this.grid.Columns = this.grid.Columns;
      this.grid.onChangSelect = (e) => {
        if (this.grid.selectedItems.length > 0) {
          this.LABEL = ` تم تحديد ${this.grid.selectedItems.length} موظف`
        }
        else {
          this.LABEL = "بحث عن موظف"
        }
      }
    });
  }
  async SelectedChange(selected: any) {
    let employesSelectes = await this._tools.getAsync(`Employee/GetEmployesByDepartId?DepartId=${selected.ID}`) as Array<any>
    if (employesSelectes) {
      employesSelectes.forEach(x => x.Depart = selected.NAME)
      this.grid.dataSource = employesSelectes;
    }
  }
  selectedData() {
    this.showDailog = false;
    this.onSelected.emit(this.grid.selectedItems)
  }
 

}
