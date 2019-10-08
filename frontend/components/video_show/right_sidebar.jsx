import React from 'react';
import { Link } from 'react-router-dom';
import RightSidebarItem from './right_sidebar_item';
import GreetingContainer from '../greeting/greeting_container'


class RightSidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // debugger
        this.props.fetchVideos();
    }

    render() {
        debugger
        const videos = this.props.videos.map(video => {
            return (
                <div>
                    <RightSidebarItem
                        key={video.id}
                        video={video}
                    />
                </div>
            )
        })
        return (
            <div>
                <ul>
                    {videos}
                </ul>
            </div>
        )
    }

}


export default RightSidebar