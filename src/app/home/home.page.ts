import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public functionPages = [
    {
      title: 'ข้อมูลพื้นฐาน',
      url: '/basedata'
    },
    {
      title: 'จัดการวิทยากร',
      url: '/expert'
    },
    {
      title: 'จัดการโครงการฝึกอบรม',
      url: '/expert'
    },
    {
      title: 'จัดการบัญชีผู้ใช้งาน',
      url: '/expert'
    }
    
  ];

  constructor() {}

}
