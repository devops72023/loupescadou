import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useMeasure from "react-use-measure";

const Card = ({ category, animatedFish, setAnimatedFish, one = false }) => {
  const card = useRef();
  card.current?.addEventListener("mouseover", () => {
    setAnimatedFish(category);
  });
  return (
    <Link
      to={`/categories/${category._id}`}
      ref={card}
      className={
        one
          ? `flex flex-col w-full max-w-[500px] justify-center items-center text-center gap-3 font-dancing`
          : `${
              animatedFish._id == category._id
                ? "opacity-100 blur-0 scale-100"
                : "opacity-60 blur-[1px] scale-95"
            } transition-300 glass max-w-[350px] flex flex-col gap-3 justify-between px-5 py-3 rounded-xl font-dancing text-center shadow-xl hover:opacity-100 hover:blur-0`
      }
    >
      <img
        src={`${import.meta.env.VITE_ASSETS}/Category-images/${category.image}`}
        alt=""
        className={one ? "max-w-[400px] w-full" : ""}
      />
      <h3 className="text-white text-4xl">{category.name}</h3>
      <p className="text-white text-lg line-clamp-3">{category.description}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-8 h-8 mx-auto text-white "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
};

function CatgoriesCard() {
  const [categories, setCategories] = useState([{}]);
  const [animatedFish, setAnimatedFish] = useState(categories[0]);
  const [ref, bounds] = useMeasure();

  const changeAnimatedFish = () => {
    if (animatedFish._id != categories[categories.length - 1]._id) {
      let index = categories.findIndex((p) => p._id == animatedFish._id);
      setAnimatedFish(categories[index + 1]);
    } else {
      setAnimatedFish(categories[0]);
    }
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/categories`)
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);
  useEffect(() => {
    const intervalid = setInterval(changeAnimatedFish, 3000);
    return () => clearInterval(intervalid);
  }, [animatedFish]);
  useEffect(() => {
    if (categories[0]._id != undefined) {
      setAnimatedFish(categories[0]);
    }
  }, [categories]);
  return (
    <div className="flex flex-col gap-8 w-full justify-center px-[20px] md:py-16 md:px-0">
      <h1 className="text-white text-7xl font-dancing text-center">
        Meilleur site de poisson en France
      </h1>
      <div className="w-full justify-center @container/cats">
        <div className="flex gap-3 w-full justify-center px-2" ref={ref}>
          {bounds.width < 800 ? (
            <Card
              category={animatedFish}
              one={true}
              setAnimatedFish={setAnimatedFish}
              animatedFish={animatedFish}
            />
          ) : (
            categories.map((category, index) => (
              <Card
                key={index}
                category={category}
                setAnimatedFish={setAnimatedFish}
                animatedFish={animatedFish}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CatgoriesCard;
