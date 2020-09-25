import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Locality } from '../entities/locality';

@Injectable({
  providedIn: 'root'
})
export class LocalitiesService {
  readonly pathToJson: string = 'assets/json/localities.json';

  constructor(
    private _http: HttpClient
  ) { }

  private getJson(): Observable<Locality[]> {
    return this._http.get<Locality[]>(this.pathToJson);
  }

  ufList(): any[] {
    const states = [];
    this.getJson().subscribe(data => {
      data.map(locality => {
        states.push({ state: locality.state, acronym: locality.acronym });
      });
    });
    return states;
  }

  getCities(uf: string): any[] {
    const cities = [];
    this.getJson().subscribe(data => {
      data.map(locality => {
        if (locality.acronym === uf) { locality.cities.map(city => cities.push(city)); }
      });
    });
    return cities;
  }

}
