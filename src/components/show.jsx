const timeConverter = (UNIX_timestamp) => {
  if (!UNIX_timestamp) return null;
  const a = new Date(UNIX_timestamp * 1); //this wasted 2 hours
  const months = [
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
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  // const sec = a.getSeconds();
  const time = date + " " + month + " " + year + "   -   " + hour + ":" + min;
  // console.log(time);
  return time;
};

const Show = (props) => {
  return (
    <div>
      {props.eqs.map((eq) => (
        <div
          className="d-flex row justify-content-around mt-3 mb-3"
          style={{ color: "white" }}
          key={eq._id}
        >
          <div className="col-2 justify-content-end">{eq.mag}</div>
          <div className="col-6 justify-content-center">{eq.location}</div>
          <div className="col-3 justify-content-start">
            {timeConverter(eq.time)}
          </div>
          <div className="col-1 justify-content-start">
            <a className="btn btn-link" href={eq.url}>
              🡭
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;
