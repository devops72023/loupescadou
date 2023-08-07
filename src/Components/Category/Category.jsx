import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductCard } from "../Global/ProductCard";

function Category() {
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const params = useParams();
  const sortsBy = [
    "Ascending",
    "Descending",
    "Le plus Récent",
    "Prix ​​élevé",
    "Prix ​​Bas",
    "Le Plus Ancien",
  ];
  const ascendingSort = () => {
    let prds = Array.from(products);
    prds.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    setProducts(prds);
    console.log(prds);
  };
  const descendingSort = () => {
    let prds = Array.from(products);
    prds.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA > titleB) {
        return -1;
      }
      if (titleA < titleB) {
        return 1;
      }
      return 0;
    });
    setProducts(prds);
    console.log(prds);
  };
  const sortByNew = () => {
    let prds = Array.from(products);
    prds.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      }
      if (a.updatedAt < b.updatedAt) {
        return 1;
      }
      return 0;
    });
    setProducts(prds);
    console.log(prds);
  };
  const sortByOlder = () => {
    let prds = Array.from(products);
    prds.sort((a, b) => {
      if (a.updatedAt < b.updatedAt) {
        return -1;
      }
      if (a.updatedAt > b.updatedAt) {
        return 1;
      }
      return 0;
    });
    setProducts(prds);
    console.log(prds);
  };
  const sortHighPrice = () => {
    let prds = Array.from(products);
    prds.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    });
    setProducts(prds);
    console.log(prds);
  };
  const sortLowPrice = () => {
    let prds = Array.from(products);
    prds.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
    setProducts(prds);
    console.log(prds);
  };
  
  const sort = (by) => {
    switch (by) {
        case 'Ascending':
            ascendingSort()
            break;
        case 'Descending':
            descendingSort()
            break;
        case 'Le plus Récent':
            sortByNew()
            break;
        case 'Prix ​​élevé':
            sortHighPrice()
            break;
        case 'Prix ​​Bas':
            sortLowPrice()
            break;
        case 'Le Plus Ancien':
            sortByOlder()
            break;

    }
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(
      `${import.meta.env.VITE_API}/categories/${params.id}/productsByName`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: search }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.products) {
          setProducts(res.products);
        }
      });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/categories/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.category) {
          setCategory(res.category);
        }
      });
    fetch(`${import.meta.env.VITE_API}/categories/`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setCategories(res);
        }
      });
    fetch(`${import.meta.env.VITE_API}/categories/${params.id}/products`)
      .then((res) => res.json())
      .then((res) => {
        if (res.products) {
          setProducts(res.products);
        }
      });
  }, [params.id]);
  return (
    <div className="flex flex-col gap-5 justify-center items-center font-dancing text-white">
      <div className="glass px-5 py-5 rounded-xl max-w-[1434px] w-[90%] flex gap-3 justify-between flex-col-reverse md:flex-row">
        <div className="flex flex-col text-center justify-center items-center gap-3 w-full">
          <h1 className="text-7xl">{category && category.name}</h1>
          <p className="text-lg">{category && category.title}</p>
          <Link
            to="#products"
            className="border rounded-md px-5 py-2 font-poppins w-fit "
          >
            Let's see
          </Link>
        </div>
        <div className="flex w-full">
          <img
            src={`${import.meta.env.VITE_ASSETS}/Category-images/${
              category && category.image
            }`}
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center item-center @container/filters w-full">
        <div className="max-w-[1434px] w-[90%] glass rounded-xl flex flex-col gap-5 p-5 md:flex-row">
          {/* The side bar */}
          <div className="flex flex-col gap-3 max-w-[350px] w-full border-r border-r-pink-500 pr-5">
            <div className="flex border-b pb-3 text-4xl w-full">
              Filtrer par:
            </div>
            <div className="flex py-4">
              <div className="glass w-full flex justify-center items-center overflow-hidden rounded-3xl">
                <i className="fas fa-search w-[50px] h-[45px] flex justify-center items-center"></i>
                <input
                  type="search "
                  placeholder="Rechercher des poissons"
                  value={search}
                  onChange={handleSearch}
                  className="w-full h-[45px] flex justify-center items-center outline-none border-none bg-transparent placeholder:text-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 font-poppins ">
              <div className="text-xl">Trié par</div>
              <div className="@container/sort w-full">
                <div className="gap-3 flex flex-wrap ">
                  {sortsBy.map((item) => (
                    <div
                        onClick={() => {sort(item)}} 
                        className="glass px-3 py-1 rounded-md cursor-pointer transition-500 hover:bg-dark-blue-500 hover:bg-opacity-50 backdrop-blur-md">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 font-poppins">
              <div className="text-white text-xl">Autre Categories</div>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => {
                  if (cat._id != category._id) {
                    return (
                      <Link
                        to={`/categories/${cat._id}`}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center text-center flex-col cursor-pointer max-w-[150px] glass px-3 py-2 rounded-md hover:scale-[.9] transition-300"
                      >
                        <img
                          src={`${
                            import.meta.env.VITE_ASSETS
                          }/Category-images/${cat.image}`}
                          className="max-w-[120px]"
                        />
                        <div className="text-md">{cat.name}</div>
                        <div className="text-sm line-clamp-2 text-gray-300">
                          {cat.title}
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <div className="w-full @container/prds">
            <div className="w-full grid gap-3 justify-center items-center grid-cols-1 @[600px]/prds:grid-cols-2 @[900px]/prds:grid-cols-3 @[1200px]/prds:grid-cols-4">
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
