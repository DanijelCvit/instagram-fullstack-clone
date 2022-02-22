const diffForHumans = (dateTimeString) => {
  if (!dateTimeString) {
    return;
  }

  const MINUTE = 1000 * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const current = new Date();
  const dateTime = new Date(dateTimeString);
  const timePassed = current - dateTime;

  if (isNaN(timePassed)) {
    return;
  }

  if (Math.round(timePassed / DAY)) {
    return new Intl.RelativeTimeFormat("en", { style: "long" }).format(
      -Math.round(timePassed / DAY),
      "day"
    );
  } else if (Math.round(timePassed / HOUR)) {
    return new Intl.RelativeTimeFormat("en", { style: "long" }).format(
      -Math.round(timePassed / HOUR),
      "hour"
    );
  } else {
    return new Intl.RelativeTimeFormat("en", { style: "long" }).format(
      -Math.max(1, Math.round(timePassed / MINUTE)),
      "minute"
    );
  }
};

export default diffForHumans;
