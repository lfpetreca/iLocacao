import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-lessee',
    template: `<h1 mat-dialog-title>Delete Lessee</h1>
    <mat-dialog-content>
      <p>Are you sure you want to delete {{passedData.lesseeName}}?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>`
})
export class DeleteLesseeComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }
}
