import { Injectable } from '@angular/core';
// importing http client to make the request
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

// import Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class IceFireService {

  public allData;
  public singleData;
  public character;
  public precharacter = [];
  public house: any[];
  public preHouse = [];
  public book = [];
  public prebook = [];
  public baseUrl = 'https://anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {
    console.log('ice-fire services called');
   }

   // method to get all ice and fire houses
   public getAllHouses(): any {
     let myResponse = this._http.get(this.baseUrl + '/houses');
     console.log(myResponse);
     return myResponse;
   }

   // method to get all ice and fire characters
   public getAllCharacters(): any {
     let myResponse = this._http.get(this.baseUrl + '/characters');
     console.log(myResponse);
     return myResponse;
   }

   // method to get all ice and fire books
   public getAllBooks(): any {
     let myResponse = this._http.get(this.baseUrl + '/books');
     console.log(myResponse);
     return myResponse;
   }

   public getCategoryDetail = (url): any => {
    let myResponse = this._http.get(url);
    return myResponse;

  }

   // to get the url of specif category
   public getCategory = (type, id): any => {
    let myResponse = this._http.get(this.baseUrl + '/' + type + '/' + id);
    return myResponse;

  }

  public setVar = (name: string, data) => {
    if (name == 'characters') {
      this.precharacter = data;
      this.character = this.getDetails(this.precharacter);
    } else if (name == 'books') {
      this.prebook = data;
      this.book = this.getDetails(this.prebook);
    } else if (name == 'houses') {
      this.preHouse = data;
      this.house = this.getDetails(this.preHouse);
    }
  }

  public getDetails = (mydata): any => {

    for (let i in mydata) {
      if (this.checkData(mydata[i])) {
        if (typeof (mydata[i]) == 'string' && mydata[i].search('https') > -1) {

          this.getCategoryDetail(mydata[i]).subscribe(
            data => {

              mydata[i] = data.name;

            },
            error => {
              console.log(error.errorMessage);

            });

        }
        if (Array.isArray(mydata[i]) && mydata[i][0].search('https') > -1) {
          let dataName = [];
          for (let singleUrl of mydata[i]) {
            this.getCategoryDetail(singleUrl).subscribe(
              data => {

                dataName.push(data.name);

              },
              error => {
                console.log(error.errorMessage);

              });

          }
          mydata[i] = dataName;

        }
      }
    }
    return mydata;
  }

  public checkData = (value): boolean => {
    if (value.length != 0 && value[0] !== '') {
      return true;
    } else {
      return false;
    }

  }

}
