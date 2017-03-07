import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(20, 'ABCcompany', 'http://brianandersondev.com', 'Ruby on Rails', 150, 80, 15, 'brianleeanderson19@yahoo.com')
  proposalTwo: Proposal = new Proposal(50, 'XYZ company', 'http://brianandersondev.com', 'Ruby on Rails', 150, 80, 15, 'brianleeanderson19@yahoo.com')
  proposalThree: Proposal = new Proposal(330, 'The company', 'http://brianandersondev.com', 'Ruby on Rails', 150, 80, 15, 'brianleeanderson19@yahoo.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}