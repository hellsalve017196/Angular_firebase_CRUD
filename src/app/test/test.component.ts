import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input("serverElement") element : {type:string,name:string,content:string}

  constructor() { }

  ngOnInit() {
  }

}
