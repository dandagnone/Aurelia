
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class App {
  constructor(router) {
    this.message = 'OPTIMUS PRIME';
    this.router =router
  }
    configureRouter(config,router){
      this.router=router
      config.title="Spaghetti"
      config.map([{route:['','Home'],name:'home',moduleId:'home',title:"home"},
      {route:'aboutme',name:'aboutme',moduleId:'aboutme',title:"aboutme"},
      {route:'contactus',name:'contactus',moduleId:'contactus',title:"contactus"}
    ]);
    
  }
  
  aboutmeclick(){
    this.router.navigateToRoute("aboutme")
  }
  contactusclick(){
    this.router.navigateToRoute("contactus")
}
homeclick(){
    this.router.navigateToRoute("home")
}
}
