import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Players(){
    const { clubID } = useParams()
    const [player, setPlayer] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchPlayer(){
            try {
                const response = await fetch('https://api.cartola.globo.com/atletas/mercado')
                const data = await response.json()
                const filter = data.atletas.filter(player => player.clube_id === parseInt(clubID))
                setPlayer(filter)
            } catch (error) {
                setError('Jogadores não encontrados')
                console.error(error)
            }
        }
        fetchPlayer()
    }, [clubID])

    return(
        <div> 
            <Link></Link>
            {error && <p>{error}</p>}
            <ul> 
                {player && player.map((playerData) => (
                    <li key={playerData.atleta_id}> 
                        <p>{playerData.apelido}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}