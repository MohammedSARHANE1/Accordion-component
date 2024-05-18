import { useState } from "react";
import "./App.css";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <>
      <Accordion />
    </>
  );
}
function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`content-box ${isOpen ? "open" : ""}`}>
      <div className="item" onClick={handleOpen}>
        <div className="gtitle">
          <p className="number">{`0${item.id}`}</p>

          <p>{item.title}</p>
          <p className="title">{isOpen ? "+" : "-"}</p>
        </div>
        <p className="icon">{isOpen ? item.text : ""}</p>
      </div>
    </div>
  );
}
function Accordion() {
  return (
    <ul className="accordion">
      {faqs.map((item) => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
