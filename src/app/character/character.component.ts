import { IceFireService } from './../ice-fire.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, public iceFireService: IceFireService, private location: Location) {
    console.log('character view component constructor is called');
   }

   public currentInfo;


  ngOnInit() {
    console.log('character view component ngOnInit is called');
    let id = this._route.snapshot.paramMap.get('id');
    this.iceFireService.getCategory('characters', id).subscribe(
      data => {
        this.currentInfo = data;
        console.log(this.currentInfo);
        this.iceFireService.setVar('characters', this.currentInfo);
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

  public goBack = (): any => {
    this.location.back();
  }
  }


