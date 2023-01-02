import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const loadingStatus = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div>
      <h1>CatBook</h1>
      {loadingStatus === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <CatList catPics={catPics} />
      )}
    </div>
  );
}

export default Cats;
