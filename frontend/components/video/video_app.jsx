import React from 'react'
import VideoIndex from './video_index';
// import { Session } from 'inspector';

export default class VideoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
        this.fetchVideos = this.fetchVideos.bind(this);
    }

    fetchVideos() {
        $.ajax({
            url: '/api/videos'
        }).then(videos => {
            debugger
            this.setState({videos});
        });
    }

    componentDidMount(){
        this.fetchVideos();
    }

    render() {
        return (
            <div className=''>
                {/* <h2>{this.props.formType}</h2> */}
                <form fetchVideos={this.fetchVideos} />
                <VideoIndex videos={this.state.videos}/>

            </div>
        )
    }
}
