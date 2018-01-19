import {Observable} from "rxjs";
import {PaginationRequest} from "../../../../@core/model/pagination/pagination-request";

export interface Table {

  getResourcesList(paginationRequest: PaginationRequest): Observable<any>;

  getPageSize(): number;
}
