import { Component } from '@angular/core';

@Component({
  selector: 'app-footersocial',
  standalone: true,
  template: `
    <div class="footer-social">
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </div>
  `,
  styles: [`
    .footer-social {
      color: #ffffff;
      background-color: #343a40;
      padding: 10px;
      text-align: center;
    }

    .footer-social a {
      color: #007bff;
      margin: 0 10px;
      text-decoration: none;
    }

    .footer-social a:hover {
      text-decoration: underline;
    }
  `]
})
export class FooterSocial {}