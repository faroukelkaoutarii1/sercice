import { Component, Input } from "@angular/core";
import { CousesService } from './courses.service';

@Component({

    selector : 'courses',
    template :`  <div class ="container">   

    <ul class="list-group">
    <li class="list-group-item list-group-item-primary"> titre : {{course.titre}} </li>
    <li class="list-group-item list-group-item-secondary">avis :{{course.avis}}   </li>
    <li class="list-group-item list-group-item-success"> cours :{{course.particpant}}</li>
    <li class="list-group-item list-group-item-danger"> prix   : {{course.prix}}</li>
   
  </ul>
</div>           `
})

export class CoursesComponent{
    
    course ={

        titre : 'formation angular',
        avis : '4.564',
        particpant : '150',
        prix : '300.25',
        publicationData : new Date(2020,11 ,17)
    }




    

constructor( ){
      
        
    }

}

