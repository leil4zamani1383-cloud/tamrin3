import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  save() {
     if(this.state=='add'){
       this.memberService.add(this.item);
      ;
      }
          else if(this.state=='edit'){
             this.memberService.edit(this.item);
          }
 this.dataRefresh();
       this.state = 'list'
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MemberItem[] = [];
  item: MemberItem = {
    
    Firstname: '',
    lastname: '',
 
  };
  memberService = inject(MembersService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.memberService.list();
  }
  add() {
    this.state ='add';
    this.item={
    Firstname: '',
    lastname: '',
   
    }
  }
  edit(member:MemberItem){
this.item={...member};
    this.state='edit';
  }
  cancel() {
    this.state ='list';
  }
}
export interface MemberItem {
  id?: number;
  Firstname: string;
  lastname: string;
  Phonenumber?: number;
  Nationalcode?: number;
}
