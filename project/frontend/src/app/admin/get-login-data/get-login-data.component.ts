import { LoginDetailsService } from './../../service/login-details.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/guards/login.service';

@Component({
  selector: 'app-get-login-data',
  templateUrl: './get-login-data.component.html',
  styleUrls: ['./get-login-data.component.scss'],
})
export class GetLoginDataComponent implements OnInit {
  loginList: any;
  constructor(private login: LoginDetailsService) {}
  ngOnInit(): void {
    this.loginList = this.login.getUserLogin().subscribe((data) => {
      console.log(data, this.loginList);
      this.loginList = data;
    });
  }
}
