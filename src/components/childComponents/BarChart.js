import { Card, Tooltip } from '@shopify/polaris';
import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';

function BarChart(data) {
    const chartData = data.data
    return (
        <Card sectioned>
                <ComposedChart
                    width={420}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 0,
                        right: 10,
                        left: 10,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="turnover" fill="#6667AB" />
                    <Line type="monotone" dataKey="profit" stroke="#ff7300" />
                    {/* <Area type="monotone" dataKey="turnover" fill="#8884d8" stroke="#8884d8" /> */}
                </ComposedChart>
        </Card>
    );
}

export default BarChart;