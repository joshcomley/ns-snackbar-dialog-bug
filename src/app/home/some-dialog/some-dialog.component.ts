import { Component, OnInit } from '@angular/core';
import { showSimpleSnackbar, showActionSnackbar } from '~/app/snackbar.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-some-dialog',
  templateUrl: './some-dialog.component.html',
  styleUrls: ['./some-dialog.component.css']
})
export class SomeDialogComponent implements OnInit {

  constructor(private page: Page) { }

  ngOnInit() {
  }

  public showNotification() {
    showActionSnackbar(this.page);
  }
}
