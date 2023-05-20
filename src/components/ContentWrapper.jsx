import React from 'react'
import Footer from './Footer'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Table from './table'

const movies = [
    {
        title: 'Billy Elliot',
        length: 123,
        rating: 5,
        genres: ['Drama', 'Comedia'],
        awards: 2
    },
    {
        title: 'Alicia en el país de las maravillas',
        length: 142,
        rating: 4.8,
        genres: ['Drama', 'Acción', 'Comedia'],
        awards: 3
    },
]

function ContentWrapper(params) {
    return (<div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <TopBar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Content Row Top --> */}
            <ContentRowTop />
            {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}

        {/* Table */}
        <Table movies={movies} />
        {/* end-Table */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}

    </div>)
}

export default React.memo(ContentWrapper)