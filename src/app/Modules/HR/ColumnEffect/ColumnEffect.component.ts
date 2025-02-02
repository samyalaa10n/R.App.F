import { Component, OnInit } from '@angular/core';
import { GetAddEditDeleteComponent } from "../../../shared/pages/get-add-edit-delete/get-add-edit-delete.component";
import { NgIf } from '@angular/common';
import { Column } from '../../../shared/components/dataGrid/Column';

@Component({
  selector: 'app-ColumnEffect',
  templateUrl: './ColumnEffect.component.html',
  styleUrls: ['./ColumnEffect.component.css'],
  imports: [GetAddEditDeleteComponent,NgIf]
})
export class ColumnEffectComponent implements OnInit {

  Columns:Array<Column>=[];
  constructor() { }

  ngOnInit() {
    this.Columns.push(new Column("ID","رقم البند"))
    this.Columns.push(new Column("COLUMN_NAME","اسم البند","text","text",200))
    this.Columns.push(new Column("TYPE","نوع البند","comboBox","comboBox",200))
    this.Columns[2].columnComboBoxDataSource=[
      {"ID":7,"NAME":"نص تفصيلي"},
      {"ID":8,"NAME":"تاريخ"},
      {"ID":9,"NAME":"نص صغير"},
      {"ID":10,"NAME":"نعم ام لا"},
      {"ID":11,"NAME":"قيمة من قائمة"},
      {"ID":12,"NAME":"اكثر من قيمة من قائمة"},
    ]
    this.Columns[2].columnComboBoxOptionLabel="NAME";
    this.Columns[2].columnComboBoxOptionValue="ID";
    this.Columns[2].columnComboBoxPlaceholder="اختر نوع البند"
    this.Columns[2].columnComboBoxChange=(e:any,item)=>{
      item.COMFIGRATION="";
      switch(e.ID)
      {
        case 1:
          item.COMFIGRATION=JSON.stringify({"API_CALLING":"Employee","FOCASE_PROPERTY":"CODE"});
          break;
        case 2:
          item.COMFIGRATION=JSON.stringify({"API_CALLING":"Employee","FOCASE_PROPERTY":"NAME"});
          break;
      }
    }
  }

}
