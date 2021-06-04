const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server is running on port 3000!');
});

app.get('/products', (req, res) => {
  fs.readFile('./express-server/products.json', 'utf8', (err, data) => {
    res.send(data);
  });
});


app.get('/basket', (req, res) => {
  fs.readFile('./express-server/basket.json', 'utf8', (err, data) => {
    res.send(data);
  });
});


app.post('/addToBasket', (req, res) => {
  fs.readFile('./express-server/basket.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{ "result": 0 }')
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.push(item);


      const product = JSON.stringify(item)
      const time = new Date()
      const string = `\n${time} - Добавление - ${product}`
      fs.appendFile('./express-server/stats.json', string,
          (err) => {if(err){
            console.log(err)
          }} )


      fs.writeFile('./express-server/basket.json', JSON.stringify(cart),
          (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  })
})



app.post('/delFromBasket', (req, res) => {
  fs.readFile('./express-server/basket.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{ "result": 0 }')
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.forEach((product) => {
        if(product.product_name == item[0].product_name){
          index = cart.indexOf(product)
          cart.splice(index, 1)
          }
        })

      const product = JSON.stringify(item[0])
      const time = new Date()
      const string = `\n${time} - Удаление - ${product}`
      fs.appendFile('./express-server/stats.json', string,
          (err) => {if(err){
            console.log(err)
          }} )


      fs.writeFile('./express-server/basket.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  })
})