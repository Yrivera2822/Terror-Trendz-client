import { useState, useEffect } from "react";
import axios from "axios";

function EditMusic({ song, index, getMusic }) {
  const [updatedSong, setUpdatedSong] = useState(song);

  const handleChange = (e) => {
    setUpdatedSong((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log("this is the updated song =>", updatedSong);
    console.log("this is the song state that doesnt change=>", song);
  }, [updatedSong]);
  // These are your variables
  // const [editArtist, setEditArtist] = useState("");
  // const [editSong, setEditSong] = useState("");
  // const [editYouTube, setEditYouTube] = useState("");
  // const [editComment, setEditComment] = useState("");

  // These are your event handler functions
  // const handleEditArtistChange = (e) => {
  //   setEditArtist(e.target.value);
  //   console.log("This is the changing artist name", editArtist);
  // };

  // const handleEditTitleChange = (e) => {
  //   setEditSong(e.target.value);
  //   console.log("this is the changing song name", editSong);
  // };

  // const handleEditYouTubeChange = (e) => {
  //   setEditYouTube(e.target.value);
  //   console.log("this is the changing youtube url", editYouTube);
  // };

  // const handleEditCommentChange = (e) => {
  //   setEditComment(e.target.value);
  //   console.log("this is changing the comments", editComment);
  // };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://cats-dogs-abner.adaptable.app/music/" + song.id,
        updatedSong
      );
      getMusic();
    } catch (error) {
      console.log("Error posting edited video information, ====>", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="collapse"
        data-bs-target={"#editForm" + index}
        aria-controls={"#editForm" + index}
        aria-expanded="false"
        style={{height:"3vh"}}
      >
        Edit{" "}
      </button>
      <div className="collapse" id={"editForm" + index}>
        <form
          onSubmit={handleEditSubmit}
          className="p-5 flex-wrap"
        >
          <div className="mb-3">
            <label for="artistName" className="form-label"></label>
            <input
              type="text"
              placeholder="Artist"
              className="form-control"
              name="artistName"
              onChange={handleChange}
              value={updatedSong.artistName}
            />
          </div>

          <div className="mb-3">
            <label for="songTitle" className="form-label"></label>
            <input
              type="text"
              placeholder="Song Title"
              className="form-control"
              name="songTitle"
              onChange={handleChange}
              value={updatedSong.songTitle}
            />
          </div>

          <div className="mb-3">
            <label for="youTubeUrl" className="form-label"></label>
            <input
              type="url"
              placeholder="Youtube Link"
              className="form-control"
              name="youTubeUrl"
              onChange={handleChange}
              value={updatedSong.youTubeUrl}
            />
          </div>

          <div className="mb-3">
            <label for="commentBox" className="form-label"></label>
            <input
              type="text"
              placeholder="leave a comment"
              className="form-control"
              name="commentBox"
              onChange={handleChange}
              value={updatedSong.commentBox}
            />
          </div>

          <div>
            {" "}
            <button type="submit" className="btn btn-outline-primary gap-5 m-1" style={{height:"3vh"}}>
              Submit Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditMusic;
