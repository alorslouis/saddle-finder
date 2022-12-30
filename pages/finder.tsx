import { useState } from "react";
import saddles from "../assets/data/saddles.json";

export default function Finder() {
  const f = saddles;

  const brands = new Set(f.map((f) => f.Brand));
  console.log(brands);
  console.log(f);

  const [activeSaddle, setActiveSaddle] = useState(f[0]);
  console.log(activeSaddle);

  const active = f ? "active" : "";

  const saddleKeys = activeSaddle && Object.keys(activeSaddle);

  const saddleValues = activeSaddle && Object.values(activeSaddle);

  const process = (act: typeof activeSaddle) => {
    const arr = [];
    for (let i = 0; i < Object.keys(act).length; i++) {
      const t = Object.values(act)[i];
      if (t.length > 3 && t.startsWith("YES")) {
        console.log(t);
        arr.push(<div>well</div>);
      } else if (t.length === 3 && t.startsWith("YES")) {
        console.log(`${t + "ff"}`);
        return <div>hi</div>;
      }
    }
  };

  //   const FF = (saddle: typeof f[0]) => {
  //     const ff = [];
  //     for (let i = 0; i < Object.keys(f).length; i++) {
  //       const t = Object.values(saddle)[i];
  //       if (t.length > 3 && t.startsWith("YES")) {
  //         ff.push(t);

  //       } else if (t.length === 3 && t.startsWith("YES")) {
  //         ff.push(t);
  //       }
  //     }
  //     return (
  //       <div>
  //         <h3>{saddle.Brand}</h3>
  //         <h3>{saddle.Model}</h3>
  //       </div>
  //     );
  //   };

  const aa = activeSaddle ? "active" : "";

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold uppercase my-8">
        saddle compatibility
      </h1>
      <h2 className="text-xl">find the right fit</h2>
      <label htmlFor="1">brand</label>
      <select placeholder="brand">
        <option id="1" value="1">
          1
        </option>
      </select>
      <div className="flex">
        <div className="flex flex-wrap gap-8 justify-center">
          <ul className="max-h-full overflow-scroll">
            {f.map((f) => {
              return (
                <li
                  key={f.Model}
                  onClick={() => setActiveSaddle(f)}
                  className="my-4 flex flex-col rounded-lg border-rounded border-2 border-white p-4 hover:border-red-800 transition-all ease-in-out"
                >
                  <h3 className="font-bold text-lg">{f.Brand}</h3>
                  <h3>{f.Model}</h3>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          {activeSaddle !== null && <div>ttttt{activeSaddle.Brand}</div>}
        </div>
        <div>{JSON.stringify(activeSaddle)}</div>
        <div>{process(activeSaddle)}</div>
      </div>
    </div>
  );
}
