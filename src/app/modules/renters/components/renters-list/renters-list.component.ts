import { Component, OnInit } from '@angular/core';

import { RenterService } from '../../../../services/renter/renter.service';

@Component({
  selector: 'app-renters-list',
  templateUrl: './renters-list.component.html',
  styleUrls: ['./renters-list.component.scss']
})
export class RentersListComponent implements OnInit {
  renters: any;

  constructor(
    private renterService: RenterService
    ) { }

  ngOnInit() {
    this.getRenters()
  }

  getRenters() {
    this.renterService.getAllRenters()
      .subscribe(res => {
        this.renters = res
      })
  }

  deleteRenter = renter => this.renterService.deleteRenter(renter);

}
