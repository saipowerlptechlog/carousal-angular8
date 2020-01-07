import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  
  public carouselBanner: NgxCarousel;
  image: any;
  carouselBannerItems: any[];
  
 
  constructor(public http:HttpClient){}
  ngOnInit(){
    this.carouselBannerItems = [];
    this.http.get('https://www.medeaz.com/api/custom/get_backgroundscroller/').subscribe(res=>{console.log(res)
    this.image=res['data']
  })


  this.carouselBanner = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    slide: 1,
    speed: 400,
    interval: 4000,
    point: {
      visible: true,
      hideOnSingleSlide: true
    },
    load: 2,
    loop: true,
    custom: 'banner',
    touch: true
  }
}
public carouselBannerLoad(evt: any) {
 
  const len = this.image.length

    for (let i = 0; i < len; i++) {
      this.carouselBannerItems.push(i);
    
  }

}
  
}
