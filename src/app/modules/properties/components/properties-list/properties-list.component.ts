import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../../../../services/property/property.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {
  properties: any;

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.getProperties()
  }

  getProperties() {
    this.propertyService.getAllProperties()
      .subscribe(res => {
        this.properties = res
      })
  }

  deleteProperty = property => this.propertyService.deleteProperty(property);

}
