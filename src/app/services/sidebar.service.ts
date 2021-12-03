import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarService {

  _a1: boolean;
  _a2: boolean;
  _a3: boolean;
  _a4: boolean;
  _a5: boolean;
  _a6: boolean;

  change_a1: EventEmitter<boolean> = new EventEmitter();
  change_a2: EventEmitter<boolean> = new EventEmitter();
  change_a3: EventEmitter<boolean> = new EventEmitter();
  change_a4: EventEmitter<boolean> = new EventEmitter();
  change_a5: EventEmitter<boolean> = new EventEmitter();
  change_a6: EventEmitter<boolean> = new EventEmitter();

  public sidebar() {
    this.change_a1.emit(this._a1);
    this.change_a2.emit(this._a2);
    this.change_a3.emit(this._a3);
    this.change_a4.emit(this._a4);
    this.change_a5.emit(this._a5);
    this.change_a6.emit(this._a6);
  }
}

