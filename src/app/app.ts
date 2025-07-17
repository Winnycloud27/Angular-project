import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Footer } from "./shared/footer/footer";
import { FooterInfo } from "./shared/footer/footerinfo/footerinfo";
import { FooterSocial } from "./shared/footer/footersocial/footersocial";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FooterInfo, FooterSocial, Footer,],
  templateUrl: './app.html', 
  styleUrls: ['./app.scss'] 
})
export class App {}