import React from 'react'
interface Props {
  date: String;
  title: String;
  body: String;
};

const EventCard = ({ date, title, body }: Props) => {
  return (
    <div className="event-card">
        <div className="event-card-image"/>
        <div className="event-card-content">
            <div className="event-card-content-date">{date}</div>
            <div className="event-card-content-title">{title}</div>
            <div className="event-card-content-body">{body}</div>
        </div>
    </div>
  )
}

export { EventCard }
