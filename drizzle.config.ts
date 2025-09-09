import type { Config } from 'drizzle-kit'

export default {
  dbCredentials: {
    url: (() => {
      if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL environment variable is not set');
      }
      return process.env.DATABASE_URL;
    })(),
  },
  dialect: 'postgresql',
  schema: 'src/infra/db/schemas/*',
  out: 'src/infra/db/migrations',
} satisfies Config