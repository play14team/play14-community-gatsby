import React from 'react'
import Moment from 'react-moment'

const EventDate = (props) => {
    const { start, end } = props
    const startDate =  new Date(start)
    const endDate = new Date(end)

    if (startDate.getMonth() === endDate.getMonth())
        return (
            <span>
                <Moment format="MMM. DD">{start}</Moment>-<Moment format="DD">{end}</Moment>, <Moment format="YYYY">{start}</Moment>
            </span>
        )
    else if (startDate.getFullYear() === endDate.getFullYear())
        return (
            <span>
                <Moment format="MMM. DD">{start}</Moment> - <Moment format="MMM. DD">{end}</Moment>, <Moment format="YYYY">{start}</Moment>
            </span>
        )
    else
        return (
            <span>
                <Moment format="MMM. DD, YYYY">{start}</Moment> - <Moment format="MMM. DD, YYYY">{end}</Moment>
            </span>
        )
}

export default EventDate

