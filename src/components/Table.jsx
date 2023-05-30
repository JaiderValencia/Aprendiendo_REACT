import React from 'react';
import ContentTable from './ContentTable'
import '../../public/css/table.css'

class Table extends React.Component {
    state = {
        moviesDB: []
    }

    async componentDidMount() {
        const movies = await fetch("http://localhost:3001/api/movies")
            .then(res => res.json())

        this.setState({ moviesDB: movies.data })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>Duración</th>
                        <th>Rating</th>
                        <th>Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.moviesDB.map((movie, i) => {
                        return <ContentTable key={i} id={movie.id} title={movie.title} length={movie.length ? movie.length : 0} rating={movie.rating} awards={movie.awards} />
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>id</th>
                        <th>Título</th>
                        <th>Duración</th>
                        <th>Rating</th>
                        <th>Premios</th>
                    </tr>
                </tfoot>
            </table >
        )
    }
}

export default React.memo(Table)