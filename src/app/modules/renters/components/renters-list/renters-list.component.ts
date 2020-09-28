import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { Renter } from '../../entities/renter';
import { RentersService } from '../../services/renters.service';
import * as fromRenter from '../../renters.reducer';
import { DialogDeleteComponent } from '../../../../shared/components/dialog/dialog-delete.component';

@Component({
  selector: 'app-renters-list',
  templateUrl: './renters-list.component.html',
  styleUrls: ['./renters-list.component.scss']
})
export class RentersListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Renter>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _renterService: RentersService,
    private _store: Store<fromRenter.State>,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._store.select(fromRenter.getAvailableRenters)
      .subscribe((renters: Renter[]) => {
        this.dataSource.data = renters;
      });
    this._renterService.fetchAvailableRenters();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  deleteRenter(renterId: string, renter: string): void {
    const dialogRef = this._dialog.open(DialogDeleteComponent, { data: { title: 'Renter', name: renter } });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._renterService.deleteRenter(renterId);
      }
    });
  }
}
