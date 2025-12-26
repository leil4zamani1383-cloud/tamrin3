import { Injectable } from '@angular/core';
import { BooksItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data: BooksItem[] = [
      { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودش', price: 8000 },
      { id: 2, title: 'برنامه نویسی ', writer: 'خودت', publisher: 'خودش', price: 9000 },
      { id: 3, title: 'پایگاه داده', writer: 'خودشان', publisher: 'خودش', price: 18000 },
      { id: 4, title: 'طراحی وب', writer: 'خودمان', publisher: 'خودش', price: 6000 },
      { id: 5, title: 'مدار منطقی', writer: 'خودم', publisher: 'خودش', price: 7000 },
    ];
    list(){
      return[ ...this.data];
    }
    add(item:BooksItem){
  this.data.push(item);
    }
  edit(item:BooksItem)  {
    const Index= this.data.findIndex(b=>b.id==item.id);
    if(Index!=-1){
this.data[Index].title=item.title;
this.data[Index].writer=item.writer;
this.data[Index].publisher=item.publisher;
this.data[Index].price=item.price;

    }
  }
}
