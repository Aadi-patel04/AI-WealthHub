import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// 1. Create a PG Pool (Prisma 7 requires it)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// 2. Pass the PG client to PrismaPg adapter
const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
// 3. Initialize Prisma Client with the adapter
 const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

export { db };
