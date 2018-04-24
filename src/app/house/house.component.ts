import { IceFireService } from './../ice-fire.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, public iceFireService: IceFireService, private location: Location) {
    console.log('house view component constructor is called');
   }

   public currentInfo;

  ngOnInit() {
    console.log('house view component ngOnInit is called');
    let id = this._route.snapshot.paramMap.get('id');
    this.iceFireService.getCategory('houses', id).subscribe(
      data => {
        this.currentInfo = data;
        console.log(this.currentInfo);
        this.iceFireService.setVar('houses', this.currentInfo);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });

  }


  public checkData = (value): boolean => {
    if (value.length != 0 && value[0] !== '') {
      return true;
    } else {
      return false;
    }

  }

  public getId = (x: string) => {
    let slash = x.lastIndexOf('/');
    let id = x.substr(slash + 1, 5);
    return id;
  }

  public goBack = (): any => {
    this.location.back();
  }
  }


