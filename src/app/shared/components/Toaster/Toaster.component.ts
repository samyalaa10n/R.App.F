import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Tools } from '../../service/Tools';
@Component({
  selector: 'app-Toaster',
  templateUrl: './Toaster.component.html',
  styleUrls: ['./Toaster.component.css'],
  standalone: true,
  imports: [ToastModule],
  providers: [MessageService]
})
export class ToasterComponent implements OnInit {

  constructor(private messageService: MessageService,private _tools:Tools) { }

  ngOnInit() {
    this._tools.Toaster=this;
  }
  showSuccess(detail:string) {
    this.messageService.add({ severity: 'success', summary: 'تم بنجاح', detail: detail });
  }

  showInfo(detail:string) {
    this.messageService.add({ severity: 'info', summary: 'معلومة', detail: detail});
  }

  showWarn(detail:string) {
    this.messageService.add({ severity: 'warn', summary: 'انتبة', detail: detail });
  }

  showError(detail:string) {
    this.messageService.add({ severity: 'error', summary: 'خطأ', detail: detail });
  }

  showContrast(detail:string) {
    this.messageService.add({ severity: 'contrast', summary: 'خطأ', detail: detail });
  }

  showSecondary(detail:string) {
    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: detail });
  }
}
