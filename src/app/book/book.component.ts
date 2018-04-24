import { IceFireService } from './../ice-fire.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, public iceFireService: IceFireService, private location: Location) {
    console.log('book view component constructor is called');
   }

   public currentInfo;

  ngOnInit() {
    console.log('book view component ngOnInit is called');
    let id = this._route.snapshot.paramMap.get('id');
    this.iceFireService.getCategory('books', id).subscribe(
      data => {
        this.currentInfo = data;
        console.log(this.currentInfo);
        this.iceFireService.setVar('books', this.currentInfo);
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

