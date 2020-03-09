import React from 'react';
import ".././App.scss"

const EntryCard = props => {
    const { date, sleepStart, sleepEnd, moodMorn, moodMid, moodNight } = props.entry;
    return (
        <div className="entry-card">
            <h2>{date}</h2>
            <div>
                Sleep Start: <em>{sleepStart}</em>
            </div>
            <div>
                Sleep End: <em>{sleepEnd}</em>
            </div>
            <div>
                Mood Morning: <strong>{moodMorn}</strong>
            </div>
            <div>
                Mood Midday: <strong>{moodMid}</strong>
            </div>
            <div>
                Mood Night: <strong>{moodNight}</strong>
            </div>
        </div>
    );
};

export default EntryCard;
