import moment from 'moment'

const Checkin = ({checkin}) => {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              Check In from
              {' ' + checkin.userName}
              <br />
              {' '}
              {moment(checkin.time).format('ddd, MMM D')}
            </div>
          </div>
          <div className="card-content">
            <ul>
              <li>
                <span className="heading">Previous Day: </span>{checkin.q1}
              </li>
              <li><span className="heading">Today: </span>{checkin.q2}</li>
              <li><span className="heading">Blockers: </span>{checkin.q3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Checkin
