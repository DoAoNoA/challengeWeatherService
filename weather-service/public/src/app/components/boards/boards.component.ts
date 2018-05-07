import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Cities } from '../../class/Cities';
import { Location } from '../../class/Location';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  location: Location[];
  
  constructor(private userService: UserService) { 

    this.userService.getLocation()
    .subscribe(cities =>{
      this.location = cities;
      console.log('cities es: '+cities);
    })
  }

  ngOnInit() {
  }
  
  deleteLocation(cityName){
    cityName = cityName.toLowerCase()
    console.log(cityName)

    this.userService.deleteLocation(cityName)
      .subscribe(data => {
        console.log(data)
      })
    
  }
}