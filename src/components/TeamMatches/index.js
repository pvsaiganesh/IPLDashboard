// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {banner: '', latest: [], recent: [], loading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dbResponse = await response.json()
    const latestMatchData = {
      umpires: dbResponse.latest_match_details.umpires,
      result: dbResponse.latest_match_details.result,
      manOfTheMatch: dbResponse.latest_match_details.man_of_the_match,
      id: dbResponse.latest_match_details.id,
      date: dbResponse.latest_match_details.date,
      venue: dbResponse.latest_match_details.venue,
      competingTeam: dbResponse.latest_match_details.competing_team,
      competingTeamLogo: dbResponse.latest_match_details.competing_team_logo,
      firstInnings: dbResponse.latest_match_details.first_innings,
      secondInnings: dbResponse.latest_match_details.second_innings,
      matchStatus: dbResponse.latest_match_details.match_status,
    }
    const recentMatchesData = dbResponse.recent_matches.map(item => ({
      umpires: item.umpires,
      result: item.result,
      manOfTheMatch: item.man_of_the_match,
      id: item.id,
      date: item.date,
      venue: item.venue,
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      firstInnings: item.first_innings,
      secondInnings: item.second_innings,
      matchStatus: item.match_status,
    }))

    this.setState({
      banner: dbResponse.team_banner_url,
      latest: latestMatchData,
      recent: recentMatchesData,
      loading: false,
    })
  }

  render() {
    const {latest, recent, banner, loading} = this.state
    return loading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="cen">
        <img src={banner} alt="img" />
        <LatestMatch latest={latest} />
        <div className="recent-cards">
          {recent.map(item => (
            <MatchCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    )
  }
}
export default TeamMatches
