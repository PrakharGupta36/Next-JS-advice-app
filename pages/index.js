import dice from "./dice.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setData([data.slip]);
      });
  }, []);

  return (
    <main>
      {data.map((i, index) => {
        const { id, advice } = i;
        return (
          <section key={index} className='card'>
            <p> Advice No #{id} </p>
            <h1 className='title'> {advice} </h1>
            <button
              onClick={(e) => {
                e.preventDefault();
                fetch("https://api.adviceslip.com/advice")
                  .then((res) => res.json())
                  .then((data) => {
                    setData([data.slip]);
                  });
              }}>
              <Image src={dice} width='25' height='25' alt='img' />
            </button>
          </section>
        );
      })}
    </main>
  );
}

export default App;
