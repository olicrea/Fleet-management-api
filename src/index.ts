import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 const taxi = await prisma.taxis.create({
   data: {
     plate: "Prueba",
   },
 });
 console.log(taxi);
}

main()
 .then(async () => {
   await prisma.$disconnect();
 })
 .catch(async (e) => {
   console.error(e);
   await prisma.$disconnect();
   process.exit(1);
 });