import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem/index'

// eslint-disable-next-line
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {userList: [], userFullName: '', userFullComment: ''}

  onClickAddCommentButton = event => {
    event.preventDefault()

    const {userList, userFullName, userFullComment} = this.state

    const date = new Date()

    const newComment = {
      id: uuidv4(),
      userName: userFullName,
      userComment: userFullComment,
      dateTime: date,
      isLiked: false,
      colorRandomNumber: Math.floor(Math.random() * 6),
    }

    this.setState({
      userList: [...userList, newComment],
      userFullName: '',
      userFullComment: '',
    })
  }

  updateInputName = event => {
    this.setState({userFullName: event.target.value})
  }

  updateInputComment = event => {
    this.setState({userFullComment: event.target.value})
  }

  onClickLikedButton = id => {
    this.setState(prevState => ({
      userList: prevState.userList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onClickDeleteIcon = id => {
    const {userList} = this.state
    this.setState({
      userList: userList.filter(eachComment => eachComment.id !== id),
    })
  }

  render() {
    const {userList, userFullName, userFullComment} = this.state

    return (
      <div className="bgContainer">
        <h1 className="commentsHeading">Comments</h1>
        <div className="commentsSectionOverallContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="commentsImage"
          />
          <form
            className="commentsSection"
            onSubmit={this.onClickAddCommentButton}
          >
            <p className="technologiesSubHeading">
              Say something about 4.0 Technologies
            </p>
            <input
              type="text"
              placeholder="Your Name"
              className="nameInput"
              onChange={this.updateInputName}
              value={userFullName}
            />
            <textarea
              rows="15"
              cols="50"
              placeholder="Your Comment"
              className="commentInput"
              onChange={this.updateInputComment}
              value={userFullComment}
            >
              {userFullComment}
            </textarea>
            <button type="submit" className="addCommentButton">
              Add Comment
            </button>
          </form>
        </div>
        <hr className="hrLine" />
        <div className="commentsCountContainer">
          <p className="commentsCount">{userList.length}</p>
          <p className="comments">Comments</p>
        </div>
        <ul className="unorderedListComments">
          {userList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentId={eachComment.id}
              userName={eachComment.userName}
              userComment={eachComment.userComment}
              dateTime={eachComment.dateTime}
              isLiked={eachComment.isLiked}
              randomNumber={eachComment.colorRandomNumber}
              onClickLikedButton={this.onClickLikedButton}
              onClickDeleteIcon={this.onClickDeleteIcon}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
