import React from 'react';
import VideoItem from './videoItem';


const VideoList= ({videos ,onVideoSelected})=> {
    const renderedList =videos.map((video)=>{
        return ( <VideoItem onVideoSelected={onVideoSelected} key={video.id.videoId} video={video}/>);
        
        
    });
    return (<div className="ui relaxed divided list">
        {renderedList}
    </div>);
};

export default VideoList;
