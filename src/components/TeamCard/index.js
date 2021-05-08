// Write your code here
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {item} = this.props
    const {id, name, teamImageUrl} = item
    return (
      <li key={id} className="card">
        <img src={teamImageUrl} className="team" alt="logo" />
        <h1 className="team-white">{name}</h1>
      </li>
    )
  }
}
export default TeamCard
