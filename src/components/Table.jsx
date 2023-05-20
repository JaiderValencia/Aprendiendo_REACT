import React from 'react';
import ContentTable from './ContentTable'
import PropTypes from 'prop-types'
import '../../public/css/table.css'

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map((movie, i) => (<ContentTable key={i} title={movie.title} length={movie.length} rating={movie.rating} genres={movie.genres} awards={movie.awards} />))}
            </tbody>
            <tfoot>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </tfoot>
        </table>
    )
}

Table.propTypes = {
    movies: PropTypes.array.isRequired
}

Table.defaultProps = {
    movies: [
        {
            title: 'Nan',
            length: 0,
            rating: 0,
            genres: ['NaN'],
            awards: 0
        }
    ]
}

export default React.memo(Table)