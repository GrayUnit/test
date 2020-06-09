import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  constructor(private cs: ClientsService) {
  }

  ngOnInit(): void {
    this.cs.collection.subscribe((datas) => {
      console.log(datas);
    });
  }

}
