function formatEventDate(d) {
    const date = new Date(d);
    const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const dayIndex = date.getDay();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${  minutes}` : minutes;

  const strTime = `${dayNames[dayIndex]  }, ${  monthNames[monthIndex]  } ${  day  }, ${  year  } ${  hours  }:${  minutes  } ${  ampm} EDT`;
  return strTime;
}

export { formatEventDate };
