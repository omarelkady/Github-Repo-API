import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestService } from 'src/data/rest.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  settings;
  username;
  repo: any = [];
  source: LocalDataSource;
  

  constructor(private restService: RestService, private toastr: ToastrService){}


  ngOnInit() {

    this.username = localStorage.getItem('username');

    this.getRepos();

    this.settings = {
      actions: false,
      totalKey: 'total',
      mode: 'external',
      columns: {
        id: {
          title: 'ID',
          data: this.repo.id
        },
        name: {
          title: 'Name',
          data: this.repo.name
        },
        url: {
          title: 'URL',
          data: this.repo.url
        },
        language: {
          title: 'Language',
          data: this.repo.language
        }
      },
    };
  }

  getRepos(){
    this.restService.GetRepos(this.username).subscribe((res: any) => {
      this.repo = res;
      this.source = new LocalDataSource(this.repo)
      console.log(this.repo)
    }, error => {
      this.toastr.error("API limit exceeded");
    })
  }

}
