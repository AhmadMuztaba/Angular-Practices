import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
  limit=5;
  images=[
    {
      title:'Pikachu',
      url:'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
    },{
      title:'squirrel',
      url:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-find-squirtle.jpg'
    },{
      title:'bulbasaur',
      url:'https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=400x300'
    },
    {
      title:'Pikachu',
      url:'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
    },{
      title:'squirrel',
      url:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-find-squirtle.jpg'
    },{
      title:'bulbasaur',
      url:'https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=400x300'
    },
    {
      title:'Pikachu',
      url:'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
    },{
      title:'squirrel',
      url:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-find-squirtle.jpg'
    },{
      title:'bulbasaur',
      url:'https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=400x300'
    },
    {
      title:'Pikachu',
      url:'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
    },{
      title:'squirrel',
      url:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-find-squirtle.jpg'
    },{
      title:'bulbasaur',
      url:'https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=400x300'
    },
    {
      title:'Pikachu',
      url:'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
    },{
      title:'squirrel',
      url:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-find-squirtle.jpg'
    },{
      title:'bulbasaur',
      url:'https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=400x300'
    },
    {
      title:'Pikachu',
      url:'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
    },{
      title:'squirrel',
      url:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-find-squirtle.jpg'
    },{
      title:'bulbasaur',
      url:'https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=400x300'
    }
  ]
  pageChange(number:number){
    this.currentPage=number;
  }
  pageIncrement(){
    if(this.currentPage<this.images.length-1){
      this.currentPage+=1;
    }
    
  }
  pageDecrement(){
   if(this.currentPage>0){
    this.currentPage-=1;
   } 
  }
  checkWindowIndex(i:number){
    if(this.currentPage==0){
      if(i>=this.currentPage && i<this.currentPage+4){
        return true;
      }
      else{
        return false;
      }
    }
    else if(this.currentPage>=this.images.length-3){
      let count=this.images.length-1-this.currentPage;
      let inc=4-count;
      if(i>(this.currentPage-inc)){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      if(i>this.currentPage-2 && i<this.currentPage+3){
        return true;
      }
      else{
        return false;
      }
    }
    
  }
}
