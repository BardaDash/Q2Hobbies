import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q2Hobbies';
  data = [];
  constructor(){}
  ngOnInit(): void{}

  store(newValue:string){
      this.data.push(newValue.split(","));
      console.log(this.data);
  }
}
