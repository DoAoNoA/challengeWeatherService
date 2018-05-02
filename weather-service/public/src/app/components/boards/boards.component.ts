import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Cities } from '../../Cities'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  cities: Cities[];
  selection: String;

  constructor(private userService: UserService) {
    this.userService.getCities()
      .subscribe(cities =>{
        this.cities = cities;
        console.log(cities);
      })

   }

  ngOnInit() {
  }

  addCity(event){
    const newCity: Cities = {
      name: this.selection,
      region:  this.selection
    };
    this.userService.addCity(newCity)
      .subscribe(city => {
        this.cities.push(city);
      })
    console.log(this.cities);

  } 
}