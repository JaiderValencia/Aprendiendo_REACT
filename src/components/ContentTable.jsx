import React from "react"
import PropTypes from 'prop-types'

function ContentTable(props) {
    return (
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.length}
            </td>
            <td>
                {props.rating}
            </td>
            <td>
                <ul>
                    {props.genres.map((genre, i)=>(<li key={i}>{genre}</li>))}
                </ul>
            </td>
            <td>
                {props.awards}
            </td>
        </tr>
    )
}

ContentTable.propTypes = {
    title: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    rating: PropTypes.number,
    genre: PropTypes.array.isRequired,
    awards: PropTypes.number
}

ContentTable.defaultProps = {
    title: 'NaN',
    length: 0,
    rating: 0,
    genre: ['NaN'],
    awards: 0
}

export default React.memo(ContentTable)