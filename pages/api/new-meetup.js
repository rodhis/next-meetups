import { MongoClient } from 'mongodb'
require('dotenv').config()

// rota /api/new-meetup

async function handler(req, res) {

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD

    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@next1.vsk9a5j.mongodb.net/?retryWrites=true&w=majority`)
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result);

        client.close()

        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler