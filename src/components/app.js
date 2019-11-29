import React from "react";
import SearchBar from "../components/searchBar";
import youtube from '../api/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
class App extends React.Component {
    state = {videos:[],selectedVideo:null};

  componentDidMount(){
    this.onTermSubmit('dance monkey');
  }

  onTermSubmit = async term => {
   const response =await youtube.get('/search',{
        params:{
            q:term
        }
    });
    
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]       
    });
    
  };

  onVideoSelected=(video)=>{
     this.setState({selectedVideo:video});
   
  }

  render() {
      const {selectedVideo}= this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}> </VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}>
                  
              </VideoList>
            </div>
          </div>
        </div>
        i have : {this.state.videos.length}
      </div>
    );
  }
}
export default App;
