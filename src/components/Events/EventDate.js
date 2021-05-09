import React from 'react'
import Moment from 'react-moment'

const EventDate = (props) => {
    const { start, end } = props
    const startDate =  new Date(start)
    const endDate = new Date(end)

    if (startDate.getMonth() === endDate.getMonth())
        return (
            <text>
                <Moment format="MMM. DD">{start}</Moment>-<Moment format="DD">{end}</Moment>, <Moment format="YYYY">{start}</Moment>
            </text>
        )
    else if (startDate.getFullYear() === endDate.getFullYear())
        return (
            <text>
                <Moment format="MMM. DD">{start}</Moment> - <Moment format="MMM. DD">{end}</Moment>, <Moment format="YYYY">{start}</Moment>
            </text>
        )
    else
        return (
            <text>
                <Moment format="MMM. DD, YYYY">{start}</Moment> - <Moment format="MMM. DD, YYYY">{end}</Moment>
            </text>
        )
}

export default EventDate

