import moment from 'moment'

const Member = ({member, lastCheckin}) => {
  const now = Date.now()
  return (
    <div className="has-text-centered subtitle">
      {member} <br />
      {lastCheckin
        ? <div className="font-size-small">
            <span className="heading">
              Last Checkin
            </span>
            <span
              className={
                now - lastCheckin.time > 24 * 60 * 60 * 1000 ? 'is-danger' : ''
              }
            >
              {moment(lastCheckin.time).format('D/M/YY - h:mm a')}
            </span>
          </div>
        : ''}
    </div>
  )
};

export default Member
