import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface MentorElement {
  _id: string;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: string[];
  user_status: string;
  count_document: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular';
    mentor: any = [];
    
    // tambahkan dari sini
    constructor(public httpClient: HttpClient) {
        this.httpClient.get("assets/mentor.json").subscribe(data =>{
            this.mentor = data;
        })
    }
    displayedColumns: string[] = ['name', 'user_type', 'entity', 'status', 'action'];
    
    ngOnInit() {
    }

    // dataSource = MentorElement;
    // sampai sini
}
