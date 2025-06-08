import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home-layout',
  imports: [
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss'
})
export class HomeLayout {
  @Input() title: string = '';
  @Input() mapBtn: string = '';
  @Output("navigate") onNavigate = new EventEmitter();

  navigate() {
    this.onNavigate.emit();
  }
}
