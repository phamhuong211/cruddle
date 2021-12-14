import React, {useState, useEffect, useCallback} from 'react';
import {Page, Card,FooterHelp, Link} from '@shopify/polaris';
import axios from 'axios';
import config from '../../config'

import BarChart from './BarChart';
import PieChartDashboard from './PieChartDashboard';


function Dashboard(user) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getDashboard = async () => {
            const res = await axios.get(`${config.apiURL}/dashboard?userId=${user.user.user}`)
            console.log("getData Dashboard", res.data[0].dashboard);
            setData(res.data[0].dashboard)
        }
        getDashboard();
    },[])

    return (
        <Page>
            <Card sectioned title= "Something">
                <p>November, 2021</p>
            </Card>
            <div className="chart row">
                <div className="barchart col-lg-6">
                    <BarChart data={data}/>
                </div>
                <div className='piechart col-lg-6'>
                    <PieChartDashboard data={data}/>
                </div>
            </div>
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