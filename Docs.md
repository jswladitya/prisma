- ` npx prisma init ` -> to initilize prisma migrations, schema 

OR

- ` npx prisma init --datasource-provider postgresql` -> to initilize prisma migrations, schema and database 


- ` npx prisma migrate ` -> if done some modifications or created the new schema | updates the prisma client code (all the code required to interact with database)


- ` npm i @prisma/client OR npx prisma generate ` -> we need client just after prisma init , it deals with interact with the database



