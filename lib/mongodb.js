import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI não está definida nas variáveis de ambiente.')
}

const uri = process.env.MONGODB_URI

// Função utilitária para conectar ao MongoDB
export async function connectToDatabase() {
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db()
    return { client, db }
}
