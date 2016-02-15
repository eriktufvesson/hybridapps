import {Page, NavController, NavParams, Modal} from 'ionic/ionic';
import {NavbarButtons} from '../../components/navbar-buttons/navbar-buttons';
import {AddToCartModal} from '../cart/cart';
import {CartPage} from '../cart/cart';
import {Products} from '../../providers/products/products';

@Page({
  templateUrl: 'build/pages/product/product.html',
  directives: [NavbarButtons]
})
export class ProductPage {
  constructor(nav: NavController, params: NavParams, productService: Products) {
    this.nav = nav;
    this.params = params;
    this.productService = productService;
    
    this.product = params.get("product");
    this.userId = 1;
  }
  
  ngOnInit() {
    this.productService.likes(this.product.id).subscribe((likes) => {
      this.likes = likes;
      this.product.nbrLikes = likes.length;
    });
    this.productService.comments(this.product.id).subscribe((comments) => {
      this.comments = comments;
      this.product.nbrComments = comments.length;
    });
  }
  
  addToCart(product) {
    let addToCartModal = Modal.create(AddToCartModal, { product: product });
    addToCartModal.onDismiss(data => {
      console.log(data);
    });
    this.nav.present(addToCartModal); 
  }
  
  hasLiked(product) {
    if (!this.likes) return false;
    return this.likes.filter((like) => like.userId = this.userId).length;
  }
  
  like(product) {
    if (this.hasLiked(product)) {
      return;
    }
    this.productService.addLike(product, this.userId).subscribe(
      like => {
        console.log("Product is liked!");
        this.likes.push(like);
        product.nbrLikes++;
      });
  }
  
  navCart() {
    this.nav.push(CartPage);
  }
}
