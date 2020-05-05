import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getpostes(){
    return this.http.get(this.url)
  }

  creatposte(post){
   return this.http.post(this.url, post)
  }

  misajourposte(post){
    return this.http.put(this.url+'/'+post.id, post)
  }

  supprimerposte(post){
    return this.http.delete(this.url+'/'+post.id)
  }
}