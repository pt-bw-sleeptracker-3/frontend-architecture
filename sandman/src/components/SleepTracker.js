import React, { useState, useEffect, useRef, useMemo } from 'react';
import Chartjs from 'chart.js';
import './SleepTracker.scss';

import { AxiosWithAuth } from '../utils/AxiosWithAuth'

import { Bar } from 'react-chartjs-2'

import DashboardNav from './DashboardNav'
import { Pane } from 'evergreen-ui'


const SleepTracker = (props) => {
    const [sleepData, setSleepData] = useState([{
        user_id: 11,
        date: '2020-03-10',
        sleepStart: 0,
        sleepEnd: 12,
        moodMorn: 2,
        moodMid: 2,
        moodNight: 2,
    }]);
    const [sleepLabels, setSleepLabels] = useState([]);
    const [chartInstance, setChartInstance] = useState(null);
    const chartContainer = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    useEffect(() => {
        AxiosWithAuth()
            .get(`api/sleep-data`)
            .then(res => {
                setSleepData(res.data)
                setSleepLabels(res.data)
            })
    }, [])

    const findHours = (sleepStartHours, sleepEndHours) => {
        if (sleepStartHours === 0 && sleepEndHours < 12) {
            return sleepEndHours;
        }
        else if (sleepStartHours === 0 && sleepEndHours > 12) {
            const totalHours = (sleepEndHours - 12) + sleepStartHours;
            return totalHours;
        }
        else if (sleepStartHours > 12 && sleepEndHours < 12) {
            const totalHours = (24 - sleepStartHours) + sleepEndHours;
            return totalHours;
        }
        else if (sleepStartHours > 12 && sleepEndHours > 12) {
            const totalHours = (sleepEndHours - 12) - (sleepStartHours - 12);
            return totalHours;
        }
        else if (sleepStartHours < 12 && sleepEndHours > 12) {
            const totalHours = (12 - sleepStartHours) + (sleepEndHours - 12);
            return totalHours;
        }
    }

    const findMood = (moodMorn, moodMid, moodNight) => {
        return ((moodMorn + moodMid + moodNight) / 3)
    }

    const chartConfig = {

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            labels: {
                fontColor: 'white'
            }
        }
    }

    return (
        <>
            <Pane
                display="flex">
                <DashboardNav />
                <Pane
                    display="flex"
                    flexDirection="column"
                    width="80%">
                    <h1>Sleep Tracker!</h1>
                    <div className="sleeptracker">
                        <Bar
                            id="myChart"
                            options={chartConfig.options}
                            data={{
                                labels: sleepData.map(entry => entry.date),
                                datasets: [
                                    {
                                        label: "Hours of Sleep",
                                        data: sleepData.map(entry => {
                                            return findHours(entry.sleepStart, entry.sleepEnd)
                                        }),
                                        backgroundColor: "#37E3B8",
                                    },
                                    {
                                        label: "Average Mood",
                                        data: sleepData.map(entry => {
                                            return findMood(entry.moodMorn, entry.moodMid, entry.moodNight)
                                        }),
                                        backgroundColor: "#8171F0",
                                    }
                                ]
                            }}
                        />
                    </div>
                </Pane>
            </Pane>
        </>
    );
}

export default SleepTracker;