import { Component } from '@angular/core';

@Component({
  selector: 'app-footerinfo',
  standalone: true,
  template: `
    <div class="footer-info">
      <p>Address: 123 St Augustine, New York City, United State</p>
      <p>Email: info&#64;mysite.com</p>
      <p>Phone: +234 907 696 3763</p>
    </div>
  `,
  styles: [`
    .footer-info {
      color: #ffffff;
      background-color: #878b8fff;
      padding: 10px;
      text-align: center;
    }
  `]
})
export class FooterInfo {}