import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint: any
  ) {
    this.url = `${this.endpoint}`;
  }

  getAllGroups(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/groups/daniela`)
      .pipe(map((v: any) => v.data.groups));
  }

  getGroupDetail(id: number): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http
      .get<any>(`${this.url}/employees/daniela/getByGroup`, { params })
      .pipe(map((v: any) => v.data.employees));
  }
}
