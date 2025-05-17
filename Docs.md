1.  ` npx prisma init OR npx prisma init --datasource-provider postgresql` -> to initilize prisma migrations, schema AND database 


2. ` npx prisma migrate dev` -> this will keep database upto date with the schema if done some modifications or created the new schema | we need prisma client first before migrate


3. ` npm i @prisma/client OR npx prisma generate ` -> it deals with interact with the database, write queries



