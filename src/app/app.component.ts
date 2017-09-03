import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 CRUD operation with an Array';
  CricketerList = [
    {name:"Sachin", position:"Opening batsmen"},
    {name:"Dhoni", position:"Middle Order"},
    {name:"Smith", position:"Middle Order"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addOrder(){
    this.CricketerList.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteOrder(i){
    this.CricketerList.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue;
  editOrder(k){
    this.model2.name = this.CricketerList[k].name;
    this.model2.position = this.CricketerList[k].position;
    this.myValue = k;

  }
  updateOrder(){
    let k= this.myValue;
    for(let i=0; i<this.CricketerList.length;i++){
      if(i==k){
        this.CricketerList[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
