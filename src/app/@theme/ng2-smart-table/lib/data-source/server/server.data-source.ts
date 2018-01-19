import { Observable } from 'rxjs';

import { LocalDataSource } from '../local/local.data-source';

import 'rxjs/add/operator/toPromise';
import {Table} from "../table";
import {PaginationRequest} from "../../../../../@core/model/pagination/pagination-request";
import {SortOptions} from "../../../../../@core/model/pagination/sort-options";

export class ServerDataSource extends LocalDataSource {

  protected lastRequestCount: number = 0;

  constructor(private table: Table) {
    super();
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {
    return this.requestElements().map(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);
      return this.data;
    }).toPromise();
  }

  protected extractDataFromResponse(res: any): Array<any> {
    const data = res.json().items;
    if (data instanceof Array) {
      return data;
    }
    throw new Error(`Data must be an array.`);
  }

  protected extractTotalFromResponse(res: any): number {
    return res.json().totalItems;
  }

  protected requestElements(): Observable<any> {
    return this.table.getResourcesList(this.createRequest());
  }

  protected createRequest(): PaginationRequest {
    let paginationRequest = new PaginationRequest();
    paginationRequest = this.addPagerOptions(paginationRequest);
    paginationRequest = this.addSortOptions(paginationRequest);
    paginationRequest = this.addFilterOptions(paginationRequest);
    return paginationRequest;
  }

  protected addPagerOptions(paginationRequest: PaginationRequest): PaginationRequest {
    this.pagingConf['perPage'] = this.table.getPageSize();
    paginationRequest.pageSize = this.pagingConf['perPage'];
    paginationRequest.pageNumber = this.pagingConf['page'] - 1;
    return paginationRequest;
  }

  protected addSortOptions(paginationRequest: PaginationRequest): PaginationRequest {
    if(this.sortConf.length > 0) {
      let sortOptions = new SortOptions();
      sortOptions.columnName = this.sortConf[0].field;
      sortOptions.direction = this.sortConf[0].direction;
      paginationRequest.sortOptions = sortOptions;
    }
    return paginationRequest;
  }

  protected addFilterOptions(paginationRequest: PaginationRequest): PaginationRequest {
    if(this.filterConf.filters) {
      let filterOptions: any = {};
      this.filterConf.filters.forEach((f: any) => {
        let search = f['search'];
        let field = f['field'];
        filterOptions[field] = search;
      });
      paginationRequest.filterOptions = filterOptions;
    }
    return paginationRequest;
  }

}
