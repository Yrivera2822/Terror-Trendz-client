import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import navigate from "navigate";

function AddMusic() {
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
      newArtist,
      newSong,
      newYouTube,
      newComment,
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

  const getMusic = () => {
    axios
      .get("https://cats-dogs-abner.adaptable.app/music")
      .then((response) => {
        console.log("Music API fetch request ====>", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMusic();
  }, [videoTest]);

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

  const deleteVideo = () => {
    e.preventDefault();

    axios
      .delete(`https://cats-dogs-abner.adaptable.app/music}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-music-container">
      <form
        onSubmit={handleSubmit}
        className="mb-3 d-flex flex-wrap align-items-left gap-5"
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <button className="btn btn-primary" onClick={deleteVideo}>
          Delete Project
        </button>
      </form>
    </div>
  );
}

export default AddMusic;
