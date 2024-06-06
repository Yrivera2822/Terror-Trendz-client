import ReactPlayer from "react-player/youtube";
import { useState, useEffect, useNavigate } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import EditMusic from "./EditMusic";

function AddMusic() {
  const [musicArray, setMusicArray] = useState(null);
  const [newArtist, setNewArtist] = useState("");
  const [newSong, setNewSong] = useState("");
  const [newYouTube, setNewYouTube] = useState("");
  const [newComment, setNewComment] = useState("");
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

  // this is where the delete is happening
  // id  and songName parameters are needed to handle the delete in the form below
  const handleDeleteVideo = async (id, songName, songArtist) => {
    try {
      const confirmed = confirm(`Are you sure you want to delete?`);
      if (confirmed) {
        const response = await axios.delete(
          `https://cats-dogs-abner.adaptable.app/music/${id}`
        );
        if (response.status === 200) {
          toast.success(`${songName} was successfully deleted!`);
          getMusic();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" p-5">
      {videoTest && (
        <ReactPlayer
          width="40vw"
          height="20vw"
          url={videoTest.youTubeUrl}
          controls
          muted
          playing
        />
      )}

      <form onSubmit={handleSubmit} className="p-1" style={{ width: "40vw" }}>
        <div className="mb-1">
          <label for="artistName" className="form-label"></label>
          <input
            type="text"
            placeholder="Artist"
            className="form-control"
            name="artistName"
            onChange={handleArtistChange}
          />
        </div>

        <div className="mb-1">
          <label for="songTitle" className="form-label"></label>
          <input
            type="text"
            placeholder="Song Title"
            className="form-control"
            name="songTitle"
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-1">
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
          <button type="submit" className="mb-3 btn btn-primary">
            Submit Video
          </button>
        </div>
      </form>
      <h2>Music List</h2>
      <ul className="list-group overflow-auto">
        {musicArray ? (
          musicArray.map((song, index) => (
            <div className="" style={{ width: "40vw" }}>
              <li
                className={`list-group-item ${
                  song.id === videoTest.id && "active"
                } d-flex justify-content-between`}
                aria-current={song.id === videoTest.id}
              >
                <span className="fw-bold">{song.artistName}</span>{" "}
                <span>{song.songTitle}</span>
                <EditMusic song={song} index={index} getMusic={getMusic} />
                <span
                  className="btn btn-danger gap-5 m-1"
                  onClick={() => handleDeleteVideo(song.id, song.songTitle)}
                > Delete Video
                </span>
              </li>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default AddMusic;

{
  /* <span className="btn btn-warning gap-5 m-1"onClick={() => handleEditVideo(song.id, song.songTitle, song.songComment, song.artistName, song.songYouTubeUrl )}> edit</span> */
}
{
  /* { <EditMusic handleSubmit={handleSubmit} songId={song.id} songTitle={song.songTitle} songComment={song.commentBox} songArtist={song.artistName} songUrl={song.youTubeUrl} />} */
}
