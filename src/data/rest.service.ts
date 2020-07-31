import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  GetRepos(username){
    return this.http.get('https://api.github.com/users/' + username + '/repos');
  }
}