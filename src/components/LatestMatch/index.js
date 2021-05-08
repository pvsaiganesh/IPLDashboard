// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latest} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latest
    return (
      <div className="background-2">
        <p> {umpires}</p>
        <p>{result}</p>
        <p>{manOfTheMatch}</p>
        <p>{id}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{competingTeam}</p>
        <img src={competingTeamLogo} className="logo-2" alt="img" />
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{matchStatus}</p>
      </div>
    )
  }
}
export default LatestMatch
