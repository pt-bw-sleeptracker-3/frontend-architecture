import React, { createRef, Component } from 'react';
import Chart from 'chart.js';
import './SleepTracker.scss';

const data = [
    {
        date: '2/26/2020',
        sleepStart: 0,
        sleepEnd: 7,
        moodMorn: 2,
        moodMid: 2,
        moodNight: 4
    },
    {
        date: '2/27/2020',
        sleepStart: 18,
        sleepEnd: 23,
        moodMorn: 3,
        moodMid: 1,
        moodNight: 3
    },
    {
        date: '2/28/2020',
        sleepStart: 22,
        sleepEnd: 6,
        moodMorn: 4,
        moodMid: 4,
        moodNight: 2
    },
    {
        date: '2/29/2020',
        sleepStart: 10,
        sleepEnd: 18,
        moodMorn: 4,
        moodMid: 2,
        moodNight: 3
    },
    {
        date: '3/01/2020',
        sleepStart: 14,
        sleepEnd: 16,
        moodMorn: 1,
        moodMid: 1,
        moodNight: 1
    },
    {
        date: '2/26/2020',
        sleepStart: 0,
        sleepEnd: 7,
        moodMorn: 2,
        moodMid: 2,
        moodNight: 4
    },
    {
        date: '2/27/2020',
        sleepStart: 18,
        sleepEnd: 23,
        moodMorn: 3,
        moodMid: 1,
        moodNight: 3
    },
    {
        date: '2/28/2020',
        sleepStart: 22,
        sleepEnd: 6,
        moodMorn: 4,
        moodMid: 4,
        moodNight: 2
    },
    {
        date: '2/29/2020',
        sleepStart: 10,
        sleepEnd: 18,
        moodMorn: 4,
        moodMid: 2,
        moodNight: 3
    },
    {
        date: '3/01/2020',
        sleepStart: 14,
        sleepEnd: 16,
        moodMorn: 1,
        moodMid: 1,
        moodNight: 1
    }
];

const mySleepData = data.map(sleepDay => {
    const sleepStartHours = sleepDay.sleepStart;
    const sleepEndHours = sleepDay.sleepEnd;

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
});

const mySleepLabels = data.map(sleepDay => {
    return sleepDay.date;
});


class SleepTracker extends Component {
    constructor() {
        super();
        this.state = {
            sleepData: mySleepData,
            sleepLabels: mySleepLabels
        };
    }

    chartRef = createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: this.state.sleepLabels,
                datasets: [
                    {
                        label: "Hours of Sleep",
                        data: this.state.sleepData,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        return (
            <>
                <h1>Sleep Tracker!</h1>
                <div className="sleeptracker">
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </>
        );
    }
};

export default SleepTracker;