import { Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {
  resources: T[] = [];

  protected router: Router;
  protected route: ActivatedRoute;

  constructor(
    protected injector: Injector,   
    private resourceService: BaseResourceService<T>
  ) { 
    this.router = this.injector.get(Router);
    this.route = this.injector.get(ActivatedRoute);
  }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a, b) => b.id - a.id),
      error => alert("Erro ao carregar registros!")
    )
  }

  editResource(id){
    const baseComponentPath = this.route.snapshot.parent.url[0].path;
     this.router.navigate([baseComponentPath + '/' + id, 'edit']);
  }

  deleteResource(resource) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert("Erro ao excluir registro!")
      );
    }
  }
}
