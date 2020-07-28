import React, { useState } from "react"
import firebase from "firebase"
import { Button } from "@material-ui/core"
import { storage, db } from "../firebase"

import "./ImageUpload.css"

function ImageUpload({ username }) {
  const [image, setImage] = useState("")
  const [progress, setProgress] = useState("")
  const [caption, setCaption] = useState("")

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )

        setProgress(progress)
      },
      (error) => {
        console.log(error)
        alert(error.message)
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //save image to db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption,
              imageUrl: url,
              username,
            })

            setProgress("")
            setCaption("")
            setImage(null)
          })
      }
    )
  }

  return (
    <div className="imageUpload">
      <h4 className="imageUpload__title">Add a Post</h4>
      <input
        className="imageUpload__caption"
        type="text"
        placeholder="Enter a caption.."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />
      <input
        className="imageUpload__file"
        type="file"
        onChange={handleChange}
      />

      <progress
        className="imageUpload__progress"
        style={!progress ? { display: "none" } : { display: "block" }}
        value={progress}
        max="100"
      />

      <Button className="imageUpload__button" onClick={handleUpload}>
        Post
      </Button>
    </div>
  )
}

export default ImageUpload
