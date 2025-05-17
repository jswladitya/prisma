import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// now i can use the client to interact with the database

async function main() {
  // prisma.user -> user represents the user table i created in schema
  await prisma.user.create({
    data: {
      name : "aditya",
      email : "aditya@gmail.com",

      //if table is referencing some other field of some other table 
      userPreference : {
        create:{
          emailUpdates : true
        }
      }
    },
  })

  const user = await prisma.user.findUniqe({
    where : {
      email : "aditya@gmail.com"
    },
    include : {
      //will find that user and prints all the info about it mentioned in schema except the field it is referecing, plus  
      //with include field, it will also include userPreference too with all the user info 
      userPreference : true
    }
  })

  const getUsers = await prisma.user.findMany(); //get all the users from the table user

  const delUsers = await prisma.user.deleteMany(); //delete all the users from the table user, for delete (one user) similar to update

  const updateUser = await prisma.user.update({
    where :{}, // find the user first
    data: {} //then update any of its field
  })
}

main().catch((e) => {
  console.log(e.message);
});
