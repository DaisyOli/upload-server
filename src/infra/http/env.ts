import zod from 'zod';

const envSchema = zod.object({
  PORT: zod.coerce.number().default(3333),
  NODE_ENV: zod.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: zod.string().url().startsWith('postgresql://'),
});

export const env = envSchema.parse(process.env);