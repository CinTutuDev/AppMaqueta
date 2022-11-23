import { Pipe, PipeTransform } from '@angular/core';
/* El filtro es nombre que uso en (pages\search\search.page.html) (pages\search\search.module.ts) para hacer un filtrado en un array de API*/
@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(
    myArray: any[],
    texto: string = '',
    columna: string = 'title'
  ): any[] {
    if (texto === '') {
      return myArray;
    }
    if (!myArray) {
      return myArray;
    }

    texto = texto.toLocaleLowerCase();

    /*   console.log(myArray);
    console.log(texto); */
    return myArray.filter((item) =>
      item[columna].toLowerCase().includes(texto)
    );
  }
}
