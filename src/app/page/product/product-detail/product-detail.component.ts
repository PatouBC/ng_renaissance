import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../class/product';
import { Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  loading: boolean;
  id: number;

  constructor(private prodServ: ProductService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private dialogRef: MatDialogRef<ProductDetailComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
                this.id = data.id;
  }

  ngOnInit() {
      this.loading = true;
      this.prodServ.getProductById(this.id)
          .subscribe((product: Product) => {
            this.product = product;
            this.loading = false;
          });

  }

    close() {
      this.dialogRef.close();
    }

}
