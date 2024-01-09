import { getStaticProps } from '..'
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

export async function getStaticProps(context) {
    //pega dados de um único meetup. como os dados não mudam muito, este é melhor que getServerSideProps.

    const meetUpId = context.params.meetUpId

    return {
        props: {
            meetUpData: {
                image: "https://4.bp.blogspot.com/--ipiAvaSMQs/WNqtY1FcS8I/AAAAAAACFAs/Nd0cvmejnVUyMeeJlKjR8NzJyZu_M2o2QCLcB/s1600/13230110_1370193742995114_2334656076115372629_n.jpg",
                id: meetUpId,
                title: "Primeiro Rolê",
                address: "Praça Matriz de Abaíra",
                description: "Para todos se conhecerem!"
            }
        }
    }
}

export default MeetupDetails