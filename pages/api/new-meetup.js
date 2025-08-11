import { MongoClient } from 'mongodb'

// rota /api/new-meetup

async function handler(req, res) {
    const uri = process.env.MONGODB_URI

    if (!uri) {
        throw new Error('MONGODB_URI não está definida.')
    }

    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect(uri)
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({ message: 'Meetup inserted!' })
    }
}

export default handler
