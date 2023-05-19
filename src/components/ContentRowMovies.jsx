import React from 'react'
import SmallCard from './SmallCard'

const cardsInfo = [
    {
        color: 'primary',
        title: 'Movies in Data Base',
        quantity: 21,
        icon: 'fa-film'
    },
    {
        color: 'success',
        title: 'Total awards',
        quantity: 79,
        icon: 'fa-award'
    },
    {
        color: 'warning',
        title: 'Actors quantity',
        quantity: 49,
        icon: 'fa-user'
    }
]

function ContentRowMovies() {
    return (
        <div className="row">
            {
                cardsInfo.map((cardInfo, i) => (
                    <SmallCard key={i} color={cardInfo.color} title={cardInfo.title} quantity={cardInfo.quantity} icon={cardInfo.icon} />
                ))
            }
        </div>
    )
}

export default React.memo(ContentRowMovies)