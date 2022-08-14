import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const fields = [
    {
      title: 'Engineering',
      published: true,
    },
    {
      title: 'Management',
      published: true,
    },
    {
      title: 'Q/A',
      published: true,
    },
    {
      title: 'Development',
      published: true,
    },
  ];

  await prisma.fields.createMany({
    data: fields,
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
