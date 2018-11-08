1.
* npm install sequelize pg --save
* run sequelize init
* go into the config folder, open config.js and make sure the 'development' object
has the correct info to actually connect to your database. sometimes you can close
out of postico, reopen it, edit a 'favorite' server, and see the values that you
were able to connect with there

sequelize init will generate:
( eslam, you've already done that, because you have )
config folder
models folder
seeders folder
migrations folder

( you can delete all of those folders ^ if you had to,
  and then delete the tables from your database, and in the SequelizeMeta table, you can
  delete all rows from that, it just keeps track of the migration files ran) then
  run sequelize init again  and then run  sh generate.models.bash again to repopulate
  the models and migrations folder with the initial models )

2. write your model definitions into the generate.models.bash

3. run sh generate.models.bash  that will populate the models folder and migrations folder with the new models

4. run sequelize db:migrate   and that will populate the actual database with the correct tables and columns
   based on the migrations generated from creating the models

5. you are ready to import the models folder into a node script, and start using models.modelName to for Example, findAll in the db create records of that model into the database etc..

extra notes: you can do stuff with sequelize db:migrate  like sequelize db:migrate:undo  or sequelize db:migrate:undo:all
and if there is an error because of missing migrations, you can edit the SequelizeMeta table in the database and remove
the rows in there that are keeping track of migrations ran. Find the row in there that has the "missing" migration, and delete
that row
