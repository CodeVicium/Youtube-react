import React from "react";
import SearchBar from "../components/searchBar";
import youtube from '../api/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
class App extends React.Component {
    state = {videos:[],selectedVideo:null};
  onTermSubmit = async term => {
   const response =await youtube.get('/search',{
        params:{
            q:term
        }
    });
    
    this.setState({videos:response.data.items});
  };

  onVideoSelected=(video)=>{
     this.setState({selectedVideo:video})
   
  }

  render() {
      const {selectedVideo}= this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <VideoDetail video={selectedVideo}> </VideoDetail>
        <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}>
            
        </VideoList>
        i have : {this.state.videos.length}
      </div>
    );
  }
}
export default App;
