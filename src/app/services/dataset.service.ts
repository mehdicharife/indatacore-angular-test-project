import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dataset } from '../interfaces/dataset';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private httpClient : HttpClient) { }

  getDatasets() : Observable<Array<Dataset>> {
    return this.httpClient.get<Array<Dataset>>("http://localhost:8089/datasets/");
  }
}
