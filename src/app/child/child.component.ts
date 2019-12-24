import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  preserveWhitespaces: false
})
export class ChildComponent implements OnInit {

  constructor() { }

  Fruit: 'Mango';
  Tree: 'Neem';

  @Input() cNames: string;

  @Output() cFruit = new EventEmitter();
  cTree = new EventEmitter();


  sendToParent() {
    this.cFruit.emit(this.Fruit);
    this.cTree.emit(this.Tree);
  }

  ngOnInit() {
  }

  whoamI() {
    return 'Im a child component';
  }

}
