const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const promise = require('bluebird')

let models = require('./models')

app.use(express.static('public'))

app.engine('mustache',mustacheExpress())
app.use(bodyParser.json({extended :false}))
app.use(bodyParser.urlencoded({extended :false}))

app.set('views','./views')
app.set('view engine','mustache')


app.post('/create_store',function(req,res){
  console.log('fadfds')
  console.log(req.body)
  let store = {
    name: req.body.name,
    location: req.body.location
  }

  models.grocery_store.create(store).then(function(created){
    console.log(created.dataValues)
    res.redirect(`/store/${created.dataValues.id}`)
  })
})

app.get('/stores', function(req,res){
  models.grocery_store.findAll().then(function(stores) {
    var parsedStores = []

    stores.forEach(function(store){
      parsedStores.push(store.dataValues)
    })

    res.render('stores', {stores : parsedStores})
  })

})


app.post('/create_item', function(req,res){

  var storeId = req.body.storeId
  models.grocery_item.create({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    store: req.body.store
  }).then(function(result){
    console.log(result)
  })

})

app.get('/store/:id', function(req,res){

  let storeId = req.params.id
  console.log(storeId)
  models.grocery_store.findAll({where: {id: storeId}, include: [{model: models.grocery_item, as: 'items'}] }).then(function(results){

    console.log(results)
    if(results && results[0]){
        let items = results[0].dataValues.items
        let store = results[0].dataValues

        let parsedItems = items.map(function(item){
          return item.dataValues
        })

        res.render('store', {items: parsedItems, storeName: store.name, storeLocation: store.location})
    }

  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
