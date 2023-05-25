import React from "react"
import PropTypes from 'prop-types'

function ContentTable(props) {
    return (
        <React.Fragment>
            <tr>
                <td>
                    {props.id}
                </td>
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
                    {props.awards}
                </td>
            </tr>
        </React.Fragment>
    )
}

ContentTable.propTypes = {
    id: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.number
        ]
    ),
    title: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    rating: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.number
        ]
    ).isRequired,
    awards: PropTypes.oneOfType(
        [
            PropTypes.number,
            PropTypes.string
        ]
    )
}

ContentTable.defaultProps = {
    id: 0,
    title: 'NaN',
    length: 0,
    rating: 0,
    genre: 'NaN',
    awards: 0
}

export default React.memo(ContentTable)