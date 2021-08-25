import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteCategory() {
  }

  editCategory(id){
     this.router.navigate(['categories/' + id, 'edit'])
  }
}
