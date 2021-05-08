// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {data: [], loading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({data: formattedData, loading: false})
  }

  render() {
    const {loading, data} = this.state
    return (
      <div className="bg">
        {loading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="head-row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl-logo"
                className="logo"
              />
              <h1 className="white">IPL Dashboard</h1>
            </div>
            <ul className="teams">
              {data.map(item => (
                <Link to={`/team-matches/${item.id}`}>
                  <TeamCard key={item.id} item={item} />
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
