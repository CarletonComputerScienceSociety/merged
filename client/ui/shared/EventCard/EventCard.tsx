import React from 'react';
interface Props {
  date: String;
  title: String;
  category: String;
}

const EventCard = ({ date, title, category }: Props) => {
  return (
    <div className="event-card">
      <div className="event-card-image" />
      <div className="event-card-content">
        <div className="event-card-content-category">{category}</div>
        <div className="event-card-content-title">{title}</div>
        <div className="event-card-content-date">{date}</div>
      </div>
    </div>
  );
};

export { EventCard };
