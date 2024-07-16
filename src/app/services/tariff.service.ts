import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TARIFFS } from '../mock-tariffs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  constructor() { }

  getTariffs(): Observable<any[]> {
    return of(MOCK_TARIFFS);
  }
}
