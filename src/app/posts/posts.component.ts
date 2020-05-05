import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  status = true;
  postes: any[] = [];
  post = {
  id: 0,
  title: '',
  body: '',
  userId: 0
  };
  
  constructor(private postService: PostService) {
  }
  
  getpostes(){
     this.postService.getpostes()
    .subscribe(response =>{
      this.postes = response.json();
    }, error => {
      alert('erreur inattendu');
    })
  }

  creatposte(){
    this.postService.creatposte(this.post)
    .subscribe(response =>{
      this.post.id = response.json().id;
      this.postes.unshift(this.post);

      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0
        }
    }, error => {
      alert('erreur inattendu');
    })
  }

  adtion(post){
  this.post = post;
  this.status = false;
   }

   misajourposte(post){
     this.postService.misajourposte(this.post)
     .subscribe(response => {
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0
        }
        this.status = true;
     }, error => {
      alert('erreur inattendu');
    })
   }

   supprimerposte(post){
    this.postService.supprimerposte(post)
    .subscribe(response => {
      let Index = this.postes.indexOf(post);
      this.postes.splice(Index, 1); 
    }, error => {
      alert('erreur inattendu');
    })
   }
   ngOnInit(){
    this.getpostes();
  }
}
