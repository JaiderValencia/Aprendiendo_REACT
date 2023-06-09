import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ContentLastMovie(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base: {props.title}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`/images/${props.img}`} alt=" Star Wars - Mandalorian " />
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p> */}
                    <Link className="btn btn-danger" rel="nofollow" to="/">View movie detail</Link>
                </div>
            </div>
        </div>
    )
}

ContentLastMovie.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default React.memo(ContentLastMovie)