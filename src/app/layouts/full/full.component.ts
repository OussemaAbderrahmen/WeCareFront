import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Publication } from 'src/app/components/actuality/publication';
import { theme } from 'src/app/components/actuality/theme';
import { ActualityserviceService } from 'src/app/Service/actualityservice.service';
import { Router } from '@angular/router';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  pub!: Publication[];
  values = Object.keys(theme);
  p! : Publication ;

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver ,private myservice : ActualityserviceService, public router: Router) { }


  

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },

    {
      link: "actuality",
      icon: "layout",
      menu: "Actuality",
    },
    {
      link: "chat",
      icon: "disc",
      menu: "Chat",
    },
    {
      link: "dashactuality",
      icon: "layout",
      menu: "AdminActuality",
    },


    
  ]

}
