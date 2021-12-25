import React from 'react'
import PropTypes from 'prop-types'

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

Chart.propTypes = {
    data: PropTypes.array,
}

Chart.defaultProps = {
    data: [],
}

const data = [
    {
        name: 'Jan',
        inspection: 12,
    },
    {
        name: 'Feb',
        inspection: 15,
    },
    {
        name: 'Mar',
        inspection: 1,
    },
    {
        name: 'Apr',
        inspection: 11,
    },
    {
        name: 'May',
        inspection: 9,
    },
    {
        name: 'Jun',
        inspection: 13,
    },
]

function Chart(props) {
    return (
        <BarChart
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            width={450}
            height={250}
            data={data}
            barSize={50}
        >
            <XAxis fontSize={10} dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="inspection" fill="#e9967a" background={{ fill: '#eee' }} />
        </BarChart>
    )
}

export default Chart
