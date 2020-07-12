import { createPool, Pool } from 'mysql2/promise'
import { dbKeys } from '../config/config'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: dbKeys.host,
        user: dbKeys.user,
        password: dbKeys.password,
        database: dbKeys.database,
        connectionLimit: 10
    });
    return connection;
}