import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http:HttpClient) { }
  search(term){
    console.log(term);
    return this.http.get('https://www.mediawiki.org/w/api.php',{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin:'*'
      }
    })
  }
}
