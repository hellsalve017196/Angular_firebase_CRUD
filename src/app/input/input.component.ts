import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() name: string;

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName,newServerContent) {
    this.serverCreated.emit({serverName:newServerName.value,serverContent:newServerContent.value});
  }

}
