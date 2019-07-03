import {Component, OnInit} from '@angular/core';
import {Category} from '../../class/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    loading: boolean;
    category: Category;


    constructor(private catServ: CategoryService,
                private router: Router,
                private activatedRoute: ActivatedRoute,) {
    }

    ngOnInit() {

        this.activatedRoute.params
            .subscribe((params) => {
                this.loading = false;
                this.catServ.getCategory(params.id)
                    .subscribe((category: Category) => {
                        this.category = category;
                    });
            });
    }
}
