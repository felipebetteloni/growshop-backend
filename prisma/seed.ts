import { PrismaClient } from '@prisma/client';
import { UserRole } from 'src/user-old/user.entity';
const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      name: "Felipe",
      role: UserRole.ADMIN,
      phone: "551199999999"
    },
  });
  console.log(admin);
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
