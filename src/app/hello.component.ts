import { Component, Input,OnInit,OnDestroy,OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit,OnDestroy,OnChanges  {
  @Input() name: string;
  timeoutInstance=null;

  constructor(){
    console.log(this.name);
  }
  ngOnChanges(Changes){
    console.log("on changes",Changes);
  }

  ngOnInit(){
    console.log("component Initialized");
  }
  ngOnDestroy(){
    console.log("component destroyed");
    if(this.timeoutInstance){
      clearInterval(this.timeoutInstance);
    }
  }
}
