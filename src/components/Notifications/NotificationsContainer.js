import * as React from 'react'
import {connect} from 'react-redux'
import './Notifications.css'
import Notifications from './Notifications'
import {makeRequest, makeMatch} from '../../actions/users'
import notificationImg from '../../images/pegBoardNotifications.png'
const r = {
  requesterId:3,
  posterId: 1,
  postBody: {
    postId:6,
    description: 'looking for somebody',
    category: 'cooking'
  }
}

class NotificationsContainer extends React.PureComponent {


  componentDidMount(){


  }

  acceptRequest = (req)=> {
    console.log(req)
    this.props.makeMatch(req)

  }


  render() {

    // return <div>hola</div>
    return <div className="container">
      <img className ="headerImg" src={notificationImg}/>
      <Notifications users = { this.props.users } logUserId = { this.props.logUserId} accept={this.acceptRequest}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    logUserId: state.logUser
  }
}

export default connect(mapStateToProps, {makeRequest, makeMatch})(NotificationsContainer)
