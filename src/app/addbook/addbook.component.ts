import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service'
import { Ibook } from '../book/IBook';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private _BookserviceService: BookserviceService, private myRoute: Router) { }
  bookId: number;
  bookname: string;
  auther: string;
  reserve: number;
  description: string;
  imgsrc: string;
  showdisplaybook: boolean;
  title:string;
  publisher:string;
  errorMessage: string;
  ngOnInit() {
  }

  showbook(): boolean {
    this.showdisplaybook = !this.showdisplaybook;
    return false;
  }
  addbookstringfromtb(evt):boolean{
    const newbook = evt as Ibook;
    this.bookId = newbook.bookId;
    this.auther = newbook.auther;
    this.description = newbook.description;
    this.imgsrc = newbook.imgsrc;
    this.bookname = newbook.bookname;
    this.publisher = newbook.publisher;
  
    return false;
    
  }
  addbook(): void {
    let book: Ibook = {
      bookId: this.bookId,
      bookname: this.bookname,
      auther: this.auther,
      reserve: this.reserve,
      description: this.description,
      imgsrc: this.imgsrc,
      publisher: this.publisher

    
    }
    console.log(book)
    this._BookserviceService.addbook(book);
      this.myRoute.navigate(['home']);
    
    
  }
}
