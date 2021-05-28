import React from 'react'
//import './EventCard.style.scss'

interface Props {
  date: String;
  title: String;
  body: String;
};

const EventCard = ({date, title, body}: Props) => {
  return (
    <div className = "EventCard">
        <div className = "EventCard-Photo"/>
        <div className = "EventCard-Text">
            <div className = "EventCard-Text-Date">{date}</div>
            <div className = "EventCard-Text-Title">{title}</div>
            <div className = "EventCard-Text-Body">{body}</div>
        </div>
    </div>
  )
}

export { EventCard }
