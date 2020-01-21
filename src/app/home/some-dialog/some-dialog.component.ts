import { Component, OnInit } from '@angular/core';
import { showSimpleSnackbar } from '~/app/snackbar.service';

@Component({
  selector: 'ns-some-dialog',
  templateUrl: './some-dialog.component.html',
  styleUrls: ['./some-dialog.component.css']
})
export class SomeDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public showNotification() {
    showSimpleSnackbar();
  }
}
