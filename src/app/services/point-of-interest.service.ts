import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PointOfInterest } from '../types/point-of-interest.type';

@Injectable({
  providedIn: 'root',
})
export class PointOfInterestService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<PointOfInterest[]> {
    const pointsOfInterest = this.httpClient.get<PointOfInterest[]>(
      'http://localhost:3000/points-of-interest'
    );

    return pointsOfInterest;
  }

  public create(
    name: string,
    x: number,
    y: number
  ): Observable<PointOfInterest> {
    const data = { name, x, y };

    const pointOfInterest = this.httpClient.post<PointOfInterest>(
      'http://localhost:3000/points-of-interest',
      data
    );

    return pointOfInterest;
  }
}
