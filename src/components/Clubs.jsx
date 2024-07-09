import React, { useState, useEffect } from "react";

export default function Clubs() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetchClub();
    }, []);

    const fetchClub = async () => {
        try {
            const response = await fetch(`https://api.cartola.globo.com/clubes`);
            const data = await response.json();
            setClubs(Object.values(data)); // Converting object to array
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="content">
            {clubs.map((club) => (
                <div className="clubes" key={club.id}>
                    <img src={club.escudos['60x60']} alt={club.nome} />
                    <div className="name">
                        <h3>{club.nome}</h3>
                        <p>{club.apelido}</p>
                        <Link to={`/player/${club.id}`}>Ver Jogadores</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
