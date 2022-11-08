import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
/* para poner el titulo correspondiente al cambiar de vista ---> <app-header titulo="Avatares"></app-header>*/

@Input() titulo:string='';
  

}
