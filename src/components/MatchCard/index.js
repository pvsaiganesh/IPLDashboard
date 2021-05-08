// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {data} = this.props
    const {
      umpires,
      result,
      competingTeam,
      competingTeamLogo,
      matchStatus,
    } = data
    return (
      <div className="background">
        <p>{result}</p>
        <p>{competingTeam}</p>
        <img className="logo-2" src={competingTeamLogo} alt="img" />
        {matchStatus === 'Lost' ? (
          <p className="red">{matchStatus}</p>
        ) : (
          <p className="green">{matchStatus}</p>
        )}
      </div>
    )
  }
}
export default MatchCard
