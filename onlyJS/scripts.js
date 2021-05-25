class GoodsItem {
    constructor(id_product, product_name, price) {
        this.id_product = id_product
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="card" style="width: 18rem;">
                  <img src= "http://placehold.it/200x150"' class="card-img-top" alt="...">
                  <div class="card-body" id="${this.id_product}">
                    <h5 class="card-title product-name">${this.product_name}</h5>
                    <p class="card-text product-price">${this.price}</p>
                    <a href="#" class="btn btn-primary product-button" id="${this.id_product}">В корзину</a>
                  </div>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    fetchGoods() {
        fetch(`https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json`)
            .then((responce) => responce.json())
            .then((data) => this.goods = data)
            .then((data) => this.filteredGoods = data)
            .then(() => this.render())
            .then(() => {
                const get_button = document.querySelectorAll('.product-button')
                for (const btn of get_button) {
                    btn.addEventListener('click', (e) => {
                        this.goods.map(el => {
                            if (el.id_product == e.target.id) {
                                const newBasket = new BasketItem(el.id_product, el.product_name, el.price)
                                basket.addOne(newBasket) //эта корзина создана внизу как экземпляр класса
                            }
                        })
                    })
                }
            })
            .catch((err) => console.log(err))
    }

    getTotalPrice() {
        this.finalPrice = 0
        this.goods.map((value) => this.finalPrice += value.price)
        return this.finalPrice
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        this.render();
    }
}


class BasketItem extends GoodsItem {
    constructor(...args) {
        super(...args);
    }

    render() {
        return `<div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="http://placehold.it/100x150" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.product_name}</h5>
                                <p class="card-text price">${this.price}</p>
                                <button type="button" class="btn btn-secondary delete" id="${this.id_product}">Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}


class Basket extends GoodsList {
    constructor(...args) {
        super(...args);
        this.count = 0;
    }

    addOne(item) {
        this.goods.push(item)
        this.render()
    }

    removeOne(item) {
        const index = this.goods.indexOf(item);
        delete this.goods[index]
        this.render()
    }

    getList() {
        return this.goods
    }

    render() {
        let listHtml = '';
        this.goods.forEach(item => {
            const basketItem = new BasketItem(item.id_product, item.product_name, item.price);
            listHtml += basketItem.render();
        });
        document.querySelector('.modal-body').innerHTML = listHtml;
        const get_button_2 = document.querySelectorAll('.delete')
        for (const btn of get_button_2) {
            btn.addEventListener('click', (e) => {
                this.goods.map(el => {
                    if (el.id_product == e.target.id) {
                        basket.removeOne(el)
                    }
                })
            })
        }
    }
}

const list = new GoodsList();
list.fetchGoods();
const basket = new Basket()
basket.render()

const searchInput = document.querySelector('.form-control')
searchInput.addEventListener('keydown', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});

// РАБОТА МОДАЛЬНОГО ОКНА КОРЗИНЫ
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
