import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PexelsResponse } from './models/pexels-response';
import { PexelsPhoto } from './models/pexels-photo';
const authKey = "563492ad6f9170000100000100d655ae13424d5baf9875d6c51b5df2";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'prjweb';
  selectedImage : PexelsPhoto;
  imageList : PexelsPhoto[] = [];
  city : string;

  counter = 1;

  constructor(private http: HttpClient){

  }


  onFilterSet(){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', authKey);
    headers = headers.append('Content-Type',"application/json");
    console.log(headers);

    /*this.imageList = [
      {src : {original : "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg"}},
      {src : {original : "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg"}},
      {src : {original : "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg"}},
      {src : {original : "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg"}}
    ];*/
    this.http.get(`https://api.pexels.com/v1/search?query=${this.city} landscape&per_page=4&orientation=landscape`, {headers : headers}).subscribe((resp : PexelsResponse) =>{
      console.log('response',resp);
      this.imageList = resp.photos;
    });
  }

  selectedPicture(picture){
    this.selectedImage = picture;
  }

   downloadUrl(url: string, fileName: string) {
    const a: any = document.createElement('a');
    a.href = url;
    a.download = "sq.jpeg";
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
    this.counter++;
  }
}
