import Head from 'next/head'
import { connectToDatabase } from '../lib/mongodb'

import MeetupList from '../components/meetups/MeetupList'

function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse or create your own meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

// export async function getServerSideProps(context) {
//     //função reservada, para casos de server-side rendering
//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(context) {
    //função reservada, só funciona em componentes dentro da pasta pages
    const { client, db } = await connectToDatabase()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            //sintaxe fixa
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 10, //segundos para regenerar a aplicação
    }
    //para este caso de aplicação, é melhor usar getStaticProps
}
//usando esse método, não é mais necessário useEffect e useState, mas a interface fica estática (não vira uma SPA)

export default HomePage
