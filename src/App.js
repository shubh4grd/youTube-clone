import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
// import Header from "./Header";
import youtube from "./apis/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("");
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  render() {
    return (
      <>
        <header>
          <div className="wrap">
            <div className="searchBar">
              <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
