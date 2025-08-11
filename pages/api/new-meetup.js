import { connectToDatabase } from '../../lib/mongodb'

// rota /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const { client, db } = await connectToDatabase()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({ message: 'Meetup inserted!' })
    }
}

export default handler
