import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id;
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfsadf',
      file_url: 'http://google.com',
      updated_at: '02/02/2017',
      image_url: 'http://google.com',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfsadf',
      file_url: 'http://google.com',
      updated_at: '02/02/2017',
      image_url: 'http://google.com',
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfsadf',
      file_url: 'http://google.com',
      updated_at: '02/02/2017',
      image_url: 'http://google.com',
    }
  ]
}