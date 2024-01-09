
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
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'a1',
            }},
            { params: {
                meetupId: 'a2',
            }},
            { params: {
                meetupId: 'a3',
            }},
        ],
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