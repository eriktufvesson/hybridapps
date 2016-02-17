import {Page, NavController, NavParams, Modal, ViewController} from 'ionic/ionic';
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

    openComments(product, comments) {
        let productCommentsModal = Modal.create(ProductCommentsModal, { product, comments });
        productCommentsModal.onDismiss(data => {
            console.log(data);
        });
        this.nav.present(productCommentsModal);
    }

    navCart() {
        this.nav.push(CartPage);
    }
}

@Page({
    templateUrl: 'build/pages/product/product-comments.html'
})
export class ProductCommentsModal {
    constructor(viewCtrl: ViewController, navParams: NavParams, nav: NavController, productService: Products) {
        this.viewCtrl = viewCtrl;
        this.product = navParams.get('product');
        this.comments = navParams.get('comments');
        this.nav = nav;
        this.productService = productService;
        this.commentBody = '';
    }

    addComment() {
        if (this.commentBody) {
            this.productService.addComment({
                userId: 1,
                body: this.commentBody,
                productId: this.product.id
            }).subscribe(comment => {
                this.comments.push(comment);
                this.commentBody = '';
            });
        }
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

}