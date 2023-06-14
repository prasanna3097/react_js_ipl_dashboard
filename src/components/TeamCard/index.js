// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, teamImageUrl} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="list-item">
          <img className="team-img" src={teamImageUrl} alt={`${name}`} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
