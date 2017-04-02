const TeamDetails = ({name, owner, joinCode}) => {
  return (
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="title has-text-centered is-hidden-tablet">
          {name}
        </div>
        <div className="level is-hidden-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">team name</p>
              <p className="title">{name}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">team owner</p>
              <p className="title">{owner}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">join code</p>
              <p className="title">{joinCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TeamDetails
