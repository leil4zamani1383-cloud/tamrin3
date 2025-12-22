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
    this.memberService.add(this.item);
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MemberItem[] = [];
  item: MemberItem = {
    id: 0,
    Firstname: '',
    lastname: '',
    Phonenumber: 0,
    Nationalcode: 0,
  };
  memberService = inject(MembersService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.memberService.list();
  }
  add() {
    this.state ='add';
  }
  cancel() {
    this.state ='list';
  }
}
export interface MemberItem {
  id: number;
  Firstname: string;
  lastname: string;
  Phonenumber: number;
  Nationalcode: number;
}
