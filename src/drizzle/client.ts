import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../env'
import { subscriptions } from './schema/subscriptions'

export const sql = postgres(env.POSTGRES_URL)
export const db = drizzle(sql, { schema: { subscriptions } })
