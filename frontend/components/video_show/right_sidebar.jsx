import React from 'react';
import { Link } from 'react-router-dom';
import RightSidebarItem from './right_sidebar_item';
import GreetingContainer from '../greeting/greeting_container'
import { withRouter } from 'react-router'


class RightSidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        
        const videos = this.props.videos.map(video => {
           
        const user = this.props.users[video.creatorId];
            return (
                <div>
                    <RightSidebarItem
                        key={video.id}
                        video={video}
                        user={user}
                    />
                </div>
            )
        })
        return (
            <div>
                <ul>
                    {videos}
                    <li>{}</li>
                </ul>
            </div>
        )
    }

}


export default RightSidebar