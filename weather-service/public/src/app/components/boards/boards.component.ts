import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Cities } from '../../Cities'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  
  constructor() {
   }

  ngOnInit() {
  }

}