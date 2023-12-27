import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocationContent } from '../types/location.interface';
import { UnitsResponse } from '../types/units-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject: BehaviorSubject<LocationContent[]> =
    new BehaviorSubject<LocationContent[]>([]);
  private allUnits$: Observable<LocationContent[]> =
    this.allUnitsSubject.asObservable();
  private filteredUnits: LocationContent[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe((data) => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<LocationContent[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: LocationContent[]) {
    this.filteredUnits = value;
  }
}
