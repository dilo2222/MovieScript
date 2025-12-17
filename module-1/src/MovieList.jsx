import {Movie} from "./Movie"
import {useState} from "react"

export function MovieList() {

  const [title, seTitle] = useState("")
  const [photo, setPhoto] = useState(null)

  const  handleSubmit = (e) => {
    e.preventDefault()
    seTitle("")
    useState(null)

  }

  return (
    <form onSibmit={handleSubmit}>
      <div>
        <span>Movie Title</span>
        <input type="text" placeholder="Title" value={title} onChange={(e) => seTitle(e.target.value)}></input>
      </div>
      <div>
        <span>Movie Photo</span>
        <input type="file" placeholder="Title"  onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
