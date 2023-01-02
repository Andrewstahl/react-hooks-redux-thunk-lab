// write your CatList component here
import React from "react";

export default function CatList({ catPics }) {
  return (
    <div id="cat-pics-container">
      {catPics.map((catPic) => {
        return (
          <img alt="cat" key={catPic.id} src={catPic.url}/>
        )
      })}
    </div>
  )
}