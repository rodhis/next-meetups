import { MongoClient } from 'mongodb'
require('dotenv').config()

import MeetupDetail from '../../components/meetups/MeetUpDetail'

function MeetupDetails() {
    return (
        <MeetupDetail
            image= "https://4.bp.blogspot.com/--ipiAvaSMQs/WNqtY1FcS8I/AAAAAAACFAs/Nd0cvmejnVUyMeeJlKjR8NzJyZu_M2o2QCLcB/s1600/13230110_1370193742995114_2334656076115372629_n.jpg"
            title= "Primeiro Rolê"
            address= "Praça Matriz de Abaíra"
            description= "Para todos se conhecerem!"
        />
 
    )
}

export async function getStaticPaths() {

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@next1.vsk9a5j.mongodb.net/?retryWrites=true&w=majority`)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()
    return {
        fallback: false,
        paths: meetups.map((meetup) => (
            { params: { meetupId: meetup._id.toString(),
            }
    }))
    }
}

export async function getStaticProps(context) {
    //pega dados de um único meetup. como os dados não mudam muito, este é melhor que getServerSideProps.

    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                image: "https://4.bp.blogspot.com/--ipiAvaSMQs/WNqtY1FcS8I/AAAAAAACFAs/Nd0cvmejnVUyMeeJlKjR8NzJyZu_M2o2QCLcB/s1600/13230110_1370193742995114_2334656076115372629_n.jpg",
                id: meetupId,
                title: "Primeiro Rolê",
                address: "Praça Matriz de Abaíra",
                description: "Para todos se conhecerem!"
            },
        },
    }
}

export default MeetupDetails