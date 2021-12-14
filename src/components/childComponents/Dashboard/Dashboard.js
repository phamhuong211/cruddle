import React, {useState, useEffect} from 'react';
import {Page, Card,FooterHelp, Link} from '@shopify/polaris';
import axios from 'axios';
import config from '../../../config'

import Quotes from './Quotes';
import BarChart from './BarChart';
import PieChartDashboard from './PieChartDashboard';


function Dashboard(user) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getDashboard = async () => {
            const res = await axios.get(`${config.apiURL}/dashboard?userId=${user.user.user}`)
            setData(res.data[0].dashboard)
        }
        getDashboard();
    },[user.user.user])

    const chartMarkup = (
        <div className="chart row">
            <div className="barchart col-lg-6">
                <BarChart data={data}/>
            </div>
            <div className='piechart col-lg-6'>
                <PieChartDashboard data={data}/>
            </div>
        </div>
    )

    return (
        <Page>
            <Quotes/>
            {chartMarkup}
            <Card sectioned>
            </Card>
            <FooterHelp>
                Need help? {' '}
                <Link external url="https://google.com">
                    click here
                </Link>
            </FooterHelp>
        </Page>
    )
}

export default Dashboard;