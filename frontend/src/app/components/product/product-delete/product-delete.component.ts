import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: any

  product: Product = {
    name: '',
    price: ''
  }

  constructor(private route: ActivatedRoute, 
    private  productService: ProductService,
    private router: Router) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.productService.readById(this.id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void  {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
