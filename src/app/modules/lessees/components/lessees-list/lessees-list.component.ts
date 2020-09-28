import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { Lessee } from '../../entities/lessee';
import { LesseeService } from '../../services/lessees.service';
import { UIService } from '../../../../shared/services/ui.service';
import * as fromLessee from '../../lessees.reducer';
import { DeleteLesseeComponent } from './delete-lessees.component';

@Component({
  selector: 'app-lessees-list',
  templateUrl: './lessees-list.component.html',
  styleUrls: ['./lessees-list.component.scss']
})
export class LesseesListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Lessee>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _lesseeService: LesseeService,
    private _store: Store<fromLessee.State>,
    private _uiService: UIService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._store.select(fromLessee.getAvailableLesses)
      .subscribe((lessees: Lessee[]) => {
        this.dataSource.data = lessees;
      });
    this._lesseeService.fetchAvailableLesses();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  deleteLessee(lesseeId: string, lessee: string): void {
    const dialogRef = this._dialog.open(DeleteLesseeComponent, { data: { lesseeName: lessee } });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._lesseeService.deleteLessee(lesseeId);
      }
    });
  }
}
