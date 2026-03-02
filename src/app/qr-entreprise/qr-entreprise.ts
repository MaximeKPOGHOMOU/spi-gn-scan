import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-entreprise',
  imports: [CommonModule],
  templateUrl: './qr-entreprise.html',
  styleUrl: './qr-entreprise.css',
})
export class QrEntreprise {
isOpen: boolean = false;

  ngOnInit() {
    this.checkOpeningHours();
  }

  checkOpeningHours() {
    const now = new Date();
    const day = now.getDay();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;

    const openTime = 8 * 60 + 30;
    const closeTime = 17 * 60 + 30;

    const isWeekDay = day >= 1 && day <= 5;

    this.isOpen = isWeekDay && currentTime >= openTime && currentTime < closeTime;
  }
}
