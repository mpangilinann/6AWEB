import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router' ;
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { Education } from './education/education';
import { WhyHireMe } from './why-hire-me/why-hire-me';

@Component ({
selector: 'app-root',
imports: [RouterOutlet, Header, Skills, Footer, Education, WhyHireMe],
templateUrl: './app.html',

})


export class App{}
