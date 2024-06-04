import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const handleEditVideo() {
//   const [newArtist, setNewArtist] = useState("");
//   const [newSong, setNewSong] = useState("");
//   const [newYouTube, setNewYouTube] = useState("");
//   const [newComment, setNewComment] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleEditVideo = async () => {
//       try {
//         const response = await axios.get(`https://cats-dogs-abner.adaptable.app/music/${id}`);
//         console.log(response);
//         setNewArtist(response.data.newArtist);
//         setNewSong(response.data.newSong);
//         setNewYouTube(response.data.newYouTube);
//         setNewComment(response.data.newComment);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     handleEditVideo();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`https://cats-dogs-abner.adaptable.app/music/${id}`, {
//         newArtist,
//         newSong,
//         newYouTube,
//         newComment,
//       });
//       console.log(response);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

function Jewelry() {
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
}

export default Jewelry;
