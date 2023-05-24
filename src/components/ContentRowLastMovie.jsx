import React from 'react'
import ContentLastMovie from './ContentLastMovie'
import GenresInDB from './GenresInDB'

function ContentRowLastMovie() {
    return (<div className="row">
        {/* <!-- Last Movie in DB --> */}
        <ContentLastMovie title='Star Wars - Mandalorian' img='mandalorian.jpg' />
        {/* <!-- End content row last movie in Data Base --> */}

        {/* <!-- Genres in DB --> */}
        <GenresInDB />
    </div>)
}

export default React.memo(ContentRowLastMovie)