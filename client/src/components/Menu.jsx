import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non qui modi, iste aperiam cumque architecto explicabo neque sunt repellendus minima, asperiores sit tempora ab quis, odio aliquid? Deleniti, facilis?",
      img: "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non qui modi, iste aperiam cumque architecto explicabo neque sunt repellendus minima, asperiores sit tempora ab quis, odio aliquid? Deleniti, facilis?",
      img: "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non qui modi, iste aperiam cumque architecto explicabo neque sunt repellendus minima, asperiores sit tempora ab quis, odio aliquid? Deleniti, facilis?",
      img: "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non qui modi, iste aperiam cumque architecto explicabo neque sunt repellendus minima, asperiores sit tempora ab quis, odio aliquid? Deleniti, facilis?",
      img: "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non qui modi, iste aperiam cumque architecto explicabo neque sunt repellendus minima, asperiores sit tempora ab quis, odio aliquid? Deleniti, facilis?",
      img: "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
