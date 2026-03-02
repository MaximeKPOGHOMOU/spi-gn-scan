import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrEntreprise } from "./qr-entreprise/qr-entreprise";

@Component({
  selector: 'app-root',
  imports: [QrEntreprise],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('infos-spi');
}
