import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/proposals';

  constructor(
    private http: Http
  ) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .map((response: Response) => <Proposal[]>response.json())
                    .catch(this.handleError);
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id + '.json');
  }
