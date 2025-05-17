import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
// now i can use the client to interact with the database


async function main(){
    // prisma.user -> user represents the user table i created in schema 
    const user = await prisma.user.create({newUserdata : {name:"aditya"}})

    const users = await prisma.user.findMany() //get all the users from the table user

    



}

main()
.catch(e => {
    console.log(e.message)
})