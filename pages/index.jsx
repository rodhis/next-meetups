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

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([])
    
    useEffect(() => {
        //send http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS)
    }, [])

    return (
        <MeetupList meetups={loadedMeetups} />
    )
}

export default HomePage