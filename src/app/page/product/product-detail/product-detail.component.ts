import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../class/product';
import { Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  loading: boolean;

  constructor(private prodServ: ProductService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
      this.loading = true;
      this.activatedRoute.params
        .subscribe((params) => {
          this.prodServ.getProductById(params.id)
              .subscribe((product: Product) => {
                this.product = product;
                this.loading = false;
              });
        });
  }

    backClicked() {
        this.location.back();
    }

}
