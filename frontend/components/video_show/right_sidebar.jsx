import React from 'react';
import { Link } from 'react-router-dom';
import RightSidebarItem from './right_sidebar_item';


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
                <RightSidebarItem
                    key={video.id}
                    video={video}
                />
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