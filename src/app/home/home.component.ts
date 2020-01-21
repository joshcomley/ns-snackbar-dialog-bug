import { SomeDialogComponent } from './some-dialog/some-dialog.component';
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { showSimpleSnackbar } from "../snackbar.service";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor(private modalService: ModalDialogService, private vcr: ViewContainerRef) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public showNotification() {
        showSimpleSnackbar();
    }

    public showDialog() {
        this.modalService.showModal(SomeDialogComponent, <ModalDialogOptions>{
            fullscreen: true,
            viewContainerRef: this.vcr
        });
    }
}
