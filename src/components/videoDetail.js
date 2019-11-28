import React from 'react';

const VideoDetail=({video})=> {
   if (!video) {
       return(<div>
           Loading....
       </div>);
   }
    return (
        <div className="ui segment">
            {video.snippet.title}
        </div>
    );
}

export default VideoDetail;
