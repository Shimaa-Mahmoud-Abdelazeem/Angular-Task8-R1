import { Component } from '@angular/core';
import { userinfo } from './userinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task-day8';
  userparent!:userinfo;
  recivedata(par:userinfo){
this.userparent=par;
  }
}
