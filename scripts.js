class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="card" style="width: 18rem;">
                  <img src= "http://placehold.it/200x150"' class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title product-name">${this.title}</h5>
                    <p class="card-text product-price">${this.price}</p>
                    <a href="#" class="btn btn-primary product-button">В корзину</a>
                  </div>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getTotalPrice() {
        this.finalPrice = 0
        this.goods.map((value) => this.finalPrice+=value.price )
        return this.finalPrice
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getTotalPrice()
