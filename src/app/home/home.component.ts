import { Component, OnInit } from '@angular/core';
import { IceFireService } from '../ice-fire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allHouses;
  public allBooks;
  public allCharacters;
  public allChar;
  public allInOne = [];
  public final;


  public search: string = ' ';

  constructor(public iceFireService: IceFireService) {
    console.log('home constructor is called');
   }

  ngOnInit() {
    console.log('home component on init called');

    this.allBooks = this.iceFireService.getAllBooks().subscribe(
      data => {

        this.allBooks = data;

        this.all(this.allBooks);
      },
      error => {
        console.log(error.errorMessage);
        console.log('some error occured');
      });

      this.allCharacters = this.iceFireService.getAllCharacters().subscribe(
      data => {

        this.allCharacters = data;
        this.allChar = this.setCharName(this.allCharacters);
        this.all(this.allChar);
      },
      error => {
        console.log(error.errorMessage);
        console.log('some error occured');
      });


    this.allHouses = this.iceFireService.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        this.all(this.allHouses);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );

  }

  public all = (data): any => {
    this.allInOne.push(data);
    this.final = [].concat(...this.allInOne);
    console.log(this.final);
  }

  public setCharName = (data): any => {
    for (let character of data) {
      if (character.name.length == 0) {
        character.name = character.aliases[0];
      }
    }
    return data;
  }

  public getId = (x: string) => {
    let slash = x.lastIndexOf('/');
    let id = x.substr(slash + 1, 5);
    return id;
  }

}
