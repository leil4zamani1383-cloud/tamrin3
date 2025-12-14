import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  imports: [],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage {
data:BooksItem[]=[
  {id:1,title:"c++",writer:"خودم",publisher:"خودش",price:8000}
]
}
export interface BooksItem{
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price?:number;

}