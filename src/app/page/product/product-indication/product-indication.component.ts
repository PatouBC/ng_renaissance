import {Component, OnInit} from '@angular/core';
import {Product} from '../../../class/product';
import {ActivatedRoute, Router} from '@angular/router';
import {IndicationService} from '../../../service/indication.service';
import {Indication} from '../../../class/indication';
import {ProductService} from '../../../service/product.service';
import { Location} from '@angular/common';


@Component({
    selector: 'app-product-indication',
    templateUrl: './product-indication.component.html',
    styleUrls: ['./product-indication.component.scss']
})
export class ProductIndicationComponent implements OnInit {

    products: Product[];
    indication: Indication;
    loading: boolean;
    private val: string;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private indicServ: IndicationService,
                private prodServ: ProductService,
                private location: Location ) {
    }

    ngOnInit() {
        this.loading = true;
        this.activatedRoute.params
            .subscribe((params) => {
                this.indicServ.getIndicationById(params.id)
                    .subscribe((indication: Indication) => {
                        this.indication = indication;
                        this.val = indication.description;
                    });
            });
        this.prodServ.getProducts()
            .subscribe((products: Product[]) => {
                this.products = products;
                this.loading = false;
            });

    }
    backClicked() {
        this.location.back();
    }

}
