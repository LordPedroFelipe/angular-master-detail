import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Category } from '../../categories/shared/category.model';

export class Entry {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: string,
    public categoryId?: string,
    public category?: Category,
  ){}

  static types = {
    expense: 'Despesa',
    renevue: 'Receita'
  }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}