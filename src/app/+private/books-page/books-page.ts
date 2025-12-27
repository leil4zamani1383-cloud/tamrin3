import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  save() {
    if(this.state=='add'){
      this.booksServisce.add(this.item);
    
    }
    else if(this.state=='edit'){
      this.booksServisce.edit(this.item);
    } else if(this.state=='remove'){
      this.booksServisce.remove(this.item);
    }
    
  this.dataRefresh();
      this.state='list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: BooksItem[] = [];
  item:BooksItem={
   title:'',
    writer:'',
    publisher:''
  };
  booksServisce = inject(BooksService);
  state:string='list';
  dataRefresh() {
    this.data = this.booksServisce.list();
  }
  add() {
    this.state='add';
    this.item={
    title:'',
    writer:'',
    publisher:''
    };
  }
  edit(book:BooksItem){
    this.item={...book};
    this.state='edit';
  }
  remove(book:BooksItem){
       this.item={...book};
    this.state='remove';
  }
  cancel(){
    this.state='list';
  }
}
export interface BooksItem {
  id?: number;
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
