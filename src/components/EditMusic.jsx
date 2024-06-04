import { useState, useEffect } from "react";
import axios from "axios";

function EditMusic({ songTitle, songComment, songArtist, songUrl }) {
  // These are your variables
  const [editArtist, setEditArtist] = useState("");
  const [editSong, setEditSong] = useState("");
  const [editYouTube, setEditYouTube] = useState("");
  const [editComment, setEditComment] = useState("");

  // These are your event handler functions
  const handleEditArtistChange = (e) => {
    setEditArtist(e.target.value);
    console.log("This is the changing artist name", editArtist);
  };

  const handleEditTitleChange = (e) => {
    setEditSong(e.target.value);
    console.log("this is the changing song name", editSong);
  };

  const handleEditYouTubeChange = (e) => {
    setEditYouTube(e.target.value);
    console.log("this is the changing youtube url", editYouTube);
  };

  const handleEditCommentChange = (e) => {
    setEditComment(e.target.value);
    console.log("this is changing the comments", editComment);
  };

//   const handleEditSubmit = async (e, id) => {
//     e.preventDefault();
//     const editVideo = {
//       artistName: editArtist,
//       songTitle: editSong,
//       youTubeUrl: editYouTube,
//       commentBox: editComment,
//     };

//     try {
//       const response = await axios.post(
//         "https://cats-dogs-abner.adaptable.app/music",
//         editVideo
//       );
//       setVideoTest(editVideo);
//     } catch (error) {
//       console.log("Error posting edited video information, ====>", error);
//     }
//   };

  return (
    <div>
      <form
        // onSubmit={handleEditSubmit}
        className="p-5 d-flex flex-wrap align-items-left gap-5"
      >
        <h2> Edit Song! </h2>
        <div className="mb-3">
          <label for="artistName" className="form-label"></label>
          <input
            type="text"
            placeholder="Artist"
            className="form-control"
            name="artistName"
            onChange={handleEditArtistChange}
            value={songArtist}
          />
        </div>

        <div className="mb-3">
          <label for="songTitle" className="form-label"></label>
          <input
            type="text"
            placeholder="Song Title"
            className="form-control"
            name="songTitle"
            onChange={handleEditTitleChange}
            value={songTitle}
          />
        </div>

        <div className="mb-3">
          <label for="youTubeUrl" className="form-label"></label>
          <input
            type="url"
            placeholder="Youtube Link"
            className="form-control"
            name="youTubeUrl"
            onChange={handleEditYouTubeChange}
            value={songUrl}
          />
        </div>

        <div className="mb-3">
          <label for="commentBox" className="form-label"></label>
          <input
            type="text"
            placeholder="leave a comment"
            className="form-control"
            name="commentBox"
            onChange={handleEditCommentChange}
            value={songComment}
          />
        </div>

        <div>
          {" "}
          <button type="submit" className="btn btn-warning gap-5 m-1">
            Submit Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditMusic;
