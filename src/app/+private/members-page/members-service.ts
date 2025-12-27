import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
    {
      id: 1,
      Firstname: 'لیلا',
      lastname: 'زمانی',
      Phonenumber: 9185456452,
      Nationalcode: 4020538024,
    },
    {
      id: 2,
      Firstname: 'فرشته',
      lastname: 'قصبستانی',
      Phonenumber: 9188965404,
      Nationalcode: 4020538025,
    },
    {
      id: 3,
      Firstname: 'زینب',
      lastname: 'رمضانی',
      Phonenumber: 9181111111,
      Nationalcode: 4020536026,
    },
    {
      id: 4,
      Firstname: 'نازنین',
      lastname: 'مسلمی',
      Phonenumber: 9182222222,
      Nationalcode: 4020535026,
    },
    {
      id: 5,
      Firstname: 'پریا',
      lastname: 'مومیموند',
      Phonenumber: 9180000000,
      Nationalcode: 4020534026,
    },
  ];
  list() {
    return [...this.data];
  }
  add(item: MemberItem) {
    this.data.push(item);
  }
   edit(item:MemberItem)  {
         const Index= this.data.findIndex(b=>b.id==item.id);
    if(Index!=-1){
this.data[Index].id=item.id;
this.data[Index].Firstname=item.Firstname;
this.data[Index].lastname=item.lastname;
this.data[Index].Phonenumber=item.Phonenumber;
this.data[Index].Nationalcode=item.Nationalcode;

    }
}
    remove(item:MemberItem)  {
 this.data=this.data.filter(b=>b.id!=item.id);
    }
  }
