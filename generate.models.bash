sequelize model:create --name grocery_store \
  --attributes name:string,location:string

sequelize model:create --name grocery_item \
  --attributes name:string,price:float,qty:integer
