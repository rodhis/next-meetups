import { MongoClient, ObjectId } from 'mongodb'
require('dotenv').config()
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetUpDetail'


function MeetupDetails(props) {
    return (
        <>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name='descripton' content={props.meetupData.description} />
        </Head>
        <MeetupDetail
            image={props.meetupData.image}
            title= {props.meetupData.title}
            address= {props.meetupData.address}
            description= {props.meetupData.description}
        />
        </>
    )
}

export async function getStaticPaths() {

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@next1.vsk9a5j.mongodb.net/?retryWrites=true&w=majority`)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    client.close()

    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => (
            { params: { meetupId: meetup._id.toString(),
            }
    }))
    }
}

export async function getStaticProps(context) {
    //pega dados de um único meetup. como os dados não mudam muito, este é melhor que getServerSideProps.

    const meetupId = context.params.meetupId

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD

    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@next1.vsk9a5j.mongodb.net/?retryWrites=true&w=majority`)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)
        ,})

    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
        },
    }
}

export default MeetupDetails