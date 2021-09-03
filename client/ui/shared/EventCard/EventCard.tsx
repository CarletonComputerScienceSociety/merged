import React from 'react';

interface Props {
  date: String;
  title: String;
  category: String;
  poster: String;
}

const EventCard = ({ date, title, category, poster }: Props) => {
  const backgroundImageStyle = (poster !== null ? { backgroundImage: `url("${  poster  }")` } : {});
  return (
    <div className="event-card">
      <div className="event-card-image" style={backgroundImageStyle}/>
      <div className="event-card-content">
        <div className="event-card-content-category">{category}</div>
        <div className="event-card-content-title">{title}</div>
        <div className="event-card-content-date">{date}</div>
      </div>
    </div>
  )
};

export { EventCard };
