import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HardcodedAuthenticationService } from 'src/app/Service/hardcoded-authentication.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/Service/user.service';

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
export class FullComponent implements OnInit ,OnDestroy{
isAdmin=true;
isAuthenticate=false;

  private userSub :Subscription;
  search: boolean = false;
  userName=''
   userData : {
    userName : string,
       id:string,
       role:string,
       _token:string,
       _tokenExpirationDate:string;
   }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private authSevice : AuthService,private breakpointObserver: BreakpointObserver,private route :ActivatedRoute,private router : Router
    ,private authService:AuthService
    ,public userservice:UserService
    ) { }
  ngOnInit(): void {
    this.userData= JSON.parse(localStorage.getItem('userData'))
    console.log(this.userData)
    if(this.userData.role==="ADMIN"){
         this.isAdmin=true;
    }else{
          this.isAdmin=false;
           console.log('oups')
    } ;
    this.userSub=this.authService.user.subscribe(user => {
    this.isAuthenticate=!!user;
    console.log(!user);
    console.log(!!user);
    });
    // console.log(this.route.snapshot.params['userName'])
    // this.userName=this.route.snapshot.params['userName']
    
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout()
  }
  updatemyProfile(){
      this.router.navigate(['userupdate', this.userData.id])
  }

  routerActive: string = "activelink";

  
  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/button",
      icon: "disc",
      menu: "Buttons",
    },
    {
      link: "/forms/:username",
      icon: "layout",
      menu: "Forms",
    },
    {
      link:"forum",
      icon:"layout",
      menu:"Forum"
    },
    
    
    {
      link: "/alerts",
      icon: "info",
      menu: "Alerts",
    },
    {
      link: "/grid-list",
      icon: "file-text",
      menu: "Grid List",
    },
    {
      link: "/menu",
      icon: "menu",
      menu: "Menus",
    },
    {
      link: "/table",
      icon: "grid",
      menu: "Tables",
    },
    {
      link: "/expansion",
      icon: "divide-circle",
      menu: "Expansion Panel",
    },
    {
      link: "/chips",
      icon: "award",
      menu: "Chips",
    },
    {
      link: "/tabs",
      icon: "list",
      menu: "Tabs",
    },
    {
      link: "/progress",
      icon: "bar-chart-2",
      menu: "Progress Bar",
    },
    {
      link: "/toolbar",
      icon: "voicemail",
      menu: "Toolbar",
    },
    {
      link: "/progress-snipper",
      icon: "loader",
      menu: "Progress Snipper",
    },
    {
      link: "/tooltip",
      icon: "bell",
      menu: "Tooltip",
    },
    {
      link: "/snackbar",
      icon: "slack",
      menu: "Snackbar",
    },
    {
      link: "/slider",
      icon: "sliders",
      menu: "Slider",
    },
    {
      link: "/slide-toggle",
      icon: "layers",
      menu: "Slide Toggle",
    },
  ]

 


}
