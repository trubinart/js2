const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];

// const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };
//
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList;
// }

const renderGoodsItem = (title, price, img='http://placehold.it/200x150') => {
    return `<div class="card" style="width: 18rem;">
  <img src= ${img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title product-name">${title}</h5>
    <p class="card-text product-price">${price}</p>
    <a href="#" class="btn btn-primary product-button">В корзину</a>
  </div>
</div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}


renderGoodsList(goods);