import ReactPlayer from "react-player/youtube";
import { useState, useEffect, useNavigate } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddMusic() {
  const [musicArray, setMusicArray] = useState(null);
  // set state de las canciones para guardar en la memoria lo capturado por el formulario
  const [newArtist, setNewArtist] = useState("");
  const [newSong, setNewSong] = useState("");
  const [newYouTube, setNewYouTube] = useState("");
  const [newComment, setNewComment] = useState("");

  // esto es pa probar.
  const [videoTest, setVideoTest] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = {
      artistName: newArtist,
      songTitle: newSong,
      youTubeUrl: newYouTube,
      commentBox: newComment,
    };
    try {
      const response = await axios.post(
        "https://cats-dogs-abner.adaptable.app/music",
        newVideo
      );
      setVideoTest(newVideo);
    } catch (error) {
      console.log("Error posting new video, ====>", error);
    }
  };

  const getMusic = async () => {
    try {
      const response = await axios.get(
        "https://cats-dogs-abner.adaptable.app/music"
      );

      console.log(response);
      setMusicArray(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMusic();
  }, []);

  useEffect(() => {
    musicArray &&
      setVideoTest(musicArray[Math.floor(Math.random() * musicArray.length)]);
  }, [musicArray]);

  const handleArtistChange = (e) => {
    setNewArtist(e.target.value);
    console.log("This is the changing artist name", newArtist);
  };

  const handleTitleChange = (e) => {
    setNewSong(e.target.value);
    console.log("this is the changing song name", newSong);
  };

  const handleYouTubeChange = (e) => {
    setNewYouTube(e.target.value);
    console.log("this is the changing youtube url", newYouTube);
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
    console.log("this is changing the comments", newComment);
  };

  const handleDeleteVideo = async (id) => {
    try {
      const confirmed = confirm(
        "Are you sure you want to delete?"
      );
      if (confirmed){
        const response = await axios.delete(
          `https://cats-dogs-abner.adaptable.app/music/${id}`
        );
        if (response.status === 200){
          toast.success(`${artistName} was successfully deleted!`);
          setMusicArray()
          // navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

      

  const handleEditVideo = async (videoId, updatedData) => {
    try {
      const confirmed = window.confirm("Edit that video");
      if (confirmed) {
        const response = await axios.put(`https://cats-dogs-abner.adaptable.app/music/${id}`, updatedData);
        console.log(response.data); 
      }

        else {
          console.log("Edit operation cancelled.");
    
        } catch (error) {
          console.log(error);
}
    };
  }

{
    // e.preventDefault();



  return (
    <div className="add-music-container">
      {videoTest && (
        <ReactPlayer url={videoTest.youTubeUrl} controls muted playing />
      )}

      <form
        onSubmit={handleSubmit}
        className="p-5 d-flex flex-wrap align-items-left gap-5"
      >
        <div className="mb-3">
          <label for="artistName" className="form-label"></label>
          <input
            type="text"
            placeholder="Artist"
            className="form-control"
            name="artistName"
            onChange={handleArtistChange}
          />
        </div>

        <div className="mb-3">
          <label for="songTitle" className="form-label"></label>
          <input
            type="text"
            placeholder="Song Title"
            className="form-control"
            name="songTitle"
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-3">
          <label for="youTubeUrl" className="form-label"></label>
          <input
            type="url"
            placeholder="Youtube Link"
            className="form-control"
            name="youTubeUrl"
            onChange={handleYouTubeChange}
          />
        </div>

        <div className="mb-3">
          <label for="commentBox" className="form-label"></label>
          <input
            type="text"
            placeholder="leave a comment"
            className="form-control"
            name="commentBox"
            onChange={handleNewCommentChange}
          />
        </div>

        <div>
          {" "}
          <button type="submit" className="btn btn-primary gap-5 m-1">
            Submit Video
          </button>
        </div>
      </form>
      <ul className="list-group list-group-numbered">
        {musicArray ? (
          musicArray.map((song) => (
            <div>
              <li
                className={`list-group-item ${
                  song.id === videoTest.id && "active"
                } d-flex justify-content-between align-items-start`}
                aria-current={song.id === videoTest.id}
              >
               <span className="fw-bold">{song.artistName}</span> {song.songTitle}
                <span className="btn btn-warning gap-5 m-1"> edit</span>
                <span className="btn btn-danger gap-5 m-1" onClick={handleDeleteVideo}>delete</span>
              </li>
            </div>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </ul>
    </div>
  );
}
}

export default AddMusic;
