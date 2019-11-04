var webstore = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue.js Pet Depot',
        product: {
            id: 1001,
            title: "Cat Food, 25lb bag",
            description: "A 25 pound bag of <em>irresistible</em>," + " organic goodness for your cat.",
            price: 2000,
            image: "../assets/images/product-fullsize.png",
            availableInventory: 5   //该商品的库存为5
        },
        cart: [],
        showProduct: true
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.product.id);
        },
        showCheckout() {
            return this.showProduct = !this.showProduct
        }
    },
    computed: {
        cartItemCount: function () {
            return this.cart.length
        },
        canAddToCart: function () {
            return this.product.availableInventory > this.cartItemCount;
        }
    },
    filters: {
        formatPrice: function (price) {
            if (!parseInt(price)) {
                return ''
            }
            if (price > 99999) {
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split('').reverse();
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index, 0, ",");
                    index += 4;
                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    }
});
