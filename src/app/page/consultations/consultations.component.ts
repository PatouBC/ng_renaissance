import { Component, OnInit } from '@angular/core';
import {ConsultService} from '../../service/consult.service';
import {CategoryService} from '../../service/category.service';
import {Consult} from '../../class/consult';
import {Category} from '../../class/category';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  consults: Consult[];
  categories: Category[];

  constructor(private consultServ: ConsultService,
              private catServ: CategoryService) { }

  ngOnInit() {
    this.getConsults();
    this.getCategories();
  }
 getConsults() {
    this.consultServ.getConsults()
        .subscribe((consults: Consult[]) => {
          this.consults = consults;
        });
 }

 getCategories() {
    this.catServ.getCategories()
        .subscribe((categories: Category[]) => {
          this.categories = categories;
        });
 }
}
