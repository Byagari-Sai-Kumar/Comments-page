// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const colorsList = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'light-blue',
  ]
  // eslint-disable-next-line
  const {
    // eslint-disable-next-line
    commentId,
    userName,
    userComment,
    dateTime,
    isLiked,
    randomNumber,
    onClickLikedButton,
    onClickDeleteIcon,
  } = props
  const firstLetter = userName[0].toUpperCase()

  const clickedOnLikeButton = () => {
    onClickLikedButton(commentId)
  }

  const clickedOnDeleteButton = () => {
    onClickDeleteIcon(commentId)
  }

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedColor = isLiked ? 'likeColor' : 'noLikeColor'

  return (
    <li className="bgContainer2">
      <div className="nameTimeContainer">
        <p className={`firstLetter ${colorsList[randomNumber]}`}>
          {firstLetter}
        </p>
        <h1 className="userName">{userName}</h1>
        <p className="commentTime">{formatDistanceToNow(dateTime)}</p>
      </div>
      <p className="userComment">{userComment}</p>
      <div className="likeDeleteContainer">
        <div className="likeLogoContainer">
          <button
            type="button"
            className="likeButton"
            onClick={clickedOnLikeButton}
          >
            <img src={likeImage} alt="like" className="likeIcon" />
          </button>
          <p className={`likeText ${likedColor}`}>Like</p>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="deleteButton"
          onClick={clickedOnDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
      <hr className="hrLine" />
    </li>
  )
}

export default CommentItem
