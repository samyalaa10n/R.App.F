import { TemplateRef } from "@angular/core"
import { MultiselectComponent } from "../multiselect/multiselect.component"

export class Column {
    constructor(
        public name: string = '',
        public header: string = '',
        public columnType: "text" | "number" | "lapel" | "dateTime" | "custom" | "comboBox"|"multiSelect"|"yes-no" = "lapel",
        public filterType: "text" | "numeric" | "boolean" | "date"| "comboBox"|"yes-no"|"none" = "text",
        public width: number = 100,
        public frozen: boolean = false
    ) {
    }
    columnComboBoxOptionLabel: string = ''
    columnComboBoxOptionValue: string = ''
    columnComboBoxPlaceholder: string = ''
    columnComboBoxDataSource: Array<any> = []
    columnComboBoxChange(selectNewItem:any,rowItem:any)
    {

    }

    columnMultiOptionLabel: string = ''
    columnMultiPlaceholder: string = ''
    columnMultiSelectpropertyBind: string = ''
    columnMultiSelectselectIdKey: string = ''
    columnMultiSelectOptionValue: string = ''
    columnMultiSelectDataSource: Array<any> = []
    columnMultiSelectChange(multiSelect:MultiselectComponent,rowItem:any)
    {

    }

    templateColumn!:TemplateRef<any>

}
