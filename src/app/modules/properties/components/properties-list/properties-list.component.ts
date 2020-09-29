import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { Property } from '../../entities/property';
import { PropertiesService } from '../../services/properties.service';
import * as fromProperties from '../../properties.reducers';
import { DialogDeleteComponent } from '../../../../shared/components/dialog/dialog-delete.component';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['reference', 'rent', 'status', 'actions'];
  dataSource = new MatTableDataSource<Property>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _propertiesService: PropertiesService,
    private _store: Store<fromProperties.State>,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._store.select(fromProperties.getAvailableProperties)
      .subscribe((properties: Property[]) => {
        this.dataSource.data = properties;
      });
    this._propertiesService.fetchAvailableProperties();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  totalPrice(rent, taxes, condominium): number { return (parseFloat(rent) + parseFloat(taxes) + parseFloat(condominium)); }

  deleteProperty(propertyId: string, property: string): void {
    const dialogRef = this._dialog.open(DialogDeleteComponent, { data: { title: 'Property', name: property } });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._propertiesService.deleteProperty(propertyId);
      }
    });
  }
}
