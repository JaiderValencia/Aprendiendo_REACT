import React from 'react'

class GenresInDB extends React.Component {
    state = {
        genresDB: [],
        overTitleBool: false
    }

    async componentDidMount() {
        const genres = await fetch("http://localhost:3001/api/genres")
            .then(res => res.json())

        this.setState({ genresDB: genres.data })
    }

    overTitle() {
        this.setState({ overTitleBool: !this.state.overTitleBool })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className={`m-0 font-weight-bold text-gray-800 ${this.state.overTitleBool ? 'bg-secondary' : null}`} onMouseOver={() => this.overTitle()}>Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.genresDB.map((genre, i) => (
                                <div className="col-lg-6 mb-4" key={i}>
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {genre.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenresInDB