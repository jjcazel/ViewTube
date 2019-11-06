import React from 'react';
// import { Link } from 'react-router-dom';
import RightSidebarItem from './right_sidebar_item';



class RightSidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchVideos().then(() => {
            this.props.fetchUsers()
        })
    }

    render() {
        const videos = this.props.videos.map(video => {
        const user = this.props.users[video.creatorId];
            return (
                <div key={video.videoUrl}>
                    
                    <RightSidebarItem
                        video={video}
                        user={user}
                    />
                </div>
            )
        })
        return (
            <div>
                <ul>
                  <div className='rightsidebar-top-vid'>
                    <li>{videos[0]}</li>
                  </div>
                    <li>{videos.slice(1)}</li> 
                </ul>
            </div>
        )
    }

}


export default RightSidebar