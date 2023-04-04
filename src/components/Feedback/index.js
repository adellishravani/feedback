import {Component} from 'react'

import './index.css'

const FeedBackItem = props => {
  const {resourceItem, displaybg} = props
  const {name, imageUrl} = resourceItem

  const feedback = () => {
    displaybg()
  }

  return (
    <li className="list">
      <img
        src={imageUrl}
        className="emoji"
        onClick={this.feedback}
        alt="name"
      />
      <p className="name">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {display: true}

  displaybg = () => {
    this.setState({display: false})
  }

  renderClickingScreen() {
    const {resources} = this.props

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our Customer support performance
          </h1>
          <div>
            <ul className="ulist">
              {resources.emojis.map(each => (
                <FeedBackItem
                  resourceItem={each}
                  key={each.id}
                  displayItem={this.displaybg}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderDisplayScreen() {
    const {resources} = this.props
    const {loveEmoji} = resources.loveEmojiUrl
    return (
      <div className="bg">
        <img src={loveEmoji} alt="love emoji" className="loveemoji" />
        <h1 className="text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {display} = this.state
    return (
      <div>
        {display ? this.renderClickingScreen() : this.renderDisplayScreen()}
      </div>
    )
  }
}

export default Feedback
