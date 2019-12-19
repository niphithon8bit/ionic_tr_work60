import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public menuPage = [
    {
      title: 'ข้อมูลพื้นฐาน',
      url: 'basedata',
      icon: 'document'
    },
    {
      title: 'จัดการวิทยากร',
      url: 'expert',
      icon: 'person'
    }
    
  ];

  constructor() {}

}
