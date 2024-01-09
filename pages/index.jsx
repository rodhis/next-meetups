import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'a1',
        title: "Primeiro Rolê",
        image: "https://4.bp.blogspot.com/--ipiAvaSMQs/WNqtY1FcS8I/AAAAAAACFAs/Nd0cvmejnVUyMeeJlKjR8NzJyZu_M2o2QCLcB/s1600/13230110_1370193742995114_2334656076115372629_n.jpg",
        address: "Praça Matriz de Abaíra",
        description: "Para todos se conhecerem!"
    },
    {
        id: 'a2',
        title: "Domingo no Axé Manga",
        image: "https://th.bing.com/th/id/OIP.Yk5-JFiGGa-J4uTeqdzpfAHaEK?rs=1&pid=ImgDetMain",
        address: "Axé Manga, Pilões, Rio de Contas",
        description: "Matar o calor e tomar aquela gelada!"
    },
    {
        id: 'a3',
        title: "Xande Lopes no Espetinho!",
        image: "https://i.ytimg.com/vi/j8JA4iLkaA8/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYDyBlKEcwDw==&rs=AOn4CLBgoaQdZaTbfAIESuUdLMisLWlj9g",
        address: "Espetinho do Gusta, Praça Matriz, Abaíra",
        description: "É de lei já!"
    }
]

function HomePage(props) {

    return (
        <MeetupList meetups={props.meetups} />
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

    return {
        props: { //sintaxe fixa
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10 //segundos para regenerar a aplicação
    }
    //para este caso de aplicação, é melhor usar getStaticProps
}
//usando esse método, não é mais necessário useEffect e useState, mas a interface fica estática (não vira uma SPA)

export default HomePage