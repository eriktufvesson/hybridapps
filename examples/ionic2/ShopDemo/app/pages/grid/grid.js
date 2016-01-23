import {Page} from 'ionic/ionic';
import {Navbar} from '../../components/navbar/navbar';
import {Products} from '../../providers/products/products';
import {Filter} from '../../pipes/filter';

@Page({
  templateUrl: 'build/pages/grid/grid.html',
  directives: [Navbar],
  pipes: [Filter]
})
export class GridPage {
  constructor(products: Products) {
    this.products = products.products;
  }
}
