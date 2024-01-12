import { PrismaClient } from '@prisma/client'
// Estearchivo utils/db.ts
// Sirve para no recargar tantas veces el PrismaClient() en el modo de desarrollo.
// luego se usa "prisma" en utils/auth.ts
const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma