import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRight = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const currentReview = reviewsList[index]
    const {imgUrl, username, companyName, description} = currentReview
    return (
      <div className="bgm">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="img" />
        <div className="corousel">
          <button type="button" className="arrow-btn" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
              onClick={this.onLeft}
            />
          </button>
          <div className="corousel-text">
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
          </div>
          <button type="button" className="arrow-btn" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
              onClick={this.onRight}
            />
          </button>
        </div>
        <p className="desc">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
