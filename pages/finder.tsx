import { useState } from "react";
import saddles from "../assets/data/saddles.json";
import notes from "../assets/data/notes.json";
import Image from "next/image";

export default function Finder() {
  const f = saddles;
  const g = notes;

  // const rr = f.map(f => {
  //     if (f.Brand === activeSaddle.Brand && f.Model === activeSaddle.Model) {
  //         return f
  //     }
  // })

  const brands = new Set(f.map((f) => f.Brand));
  console.log(brands);
  console.log(f);

  const [activeBrand, setActiveBrand] = useState("");
  console.log(activeBrand);

  const BrandSelector = (brand: typeof brands) => {
    const ft = Array.from(brands).map((brand) => {
      return (
        <button
          onClick={() =>
            activeBrand === brand ? setActiveBrand("") : setActiveBrand(brand)
          }
          className={`p-4 my-2 border-2 rounded-lg ${
            activeBrand === brand && "bg-red-500"
          }`}
        >
          {brand}
        </button>
      );
    });

    return <div className="flex flex-wrap justify-evenly my-4">{ft}</div>;
  };

  const [activeSaddle, setActiveSaddle] = useState(f[0]);
  console.log(activeSaddle);

  return (
    <div className="container flex-col mx-auto text-center">
      <h1 className="text-4xl font-bold uppercase my-8">
        saddle compatibility
      </h1>
      <h2 className="text-xl">find the gear to fit your build</h2>

      {/* brand selector -  */}

      <div>{BrandSelector(brands)}</div>

      <label htmlFor="1">brand</label>
      <select placeholder="brand">
        <option id="1" value="1">
          1
        </option>
      </select>
      <div className="flex">
        {/* saddle selector */}
        <div className="flex flex-col max-w-1/2 flex-wrap gap-8 ">
          <ul className="max-h-screen grow overflow-scroll">
            {f.map((f) => {
              if ((activeBrand && f.Brand === activeBrand) || !activeBrand) {
                return (
                  <li
                    key={f.Model}
                    onClick={() => setActiveSaddle(f)}
                    className="my-4 flex flex-col rounded-lg border-rounded border-2 border-white p-4 hover:border-red-800 transition-all ease-in-out"
                  >
                    <h3>{f.Brand}</h3>
                    <h3 className="font-bold text-lg">{f.Model}</h3>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="flex flex-col">
          <div>
            {activeSaddle !== null && <div>ttttt{activeSaddle.Brand}</div>}
          </div>

          <div className="grid grid-cols-4 grid-flow-row flex-wrap justify-center mx-auto">
            {Array.from(Object.keys(activeSaddle)).map((m, index) => {
              // get value for key
              const temp = Object.values(activeSaddle)[index];
              const formatted = temp.slice(temp.length - 1);

              const DisplayWithNotes = (mat: string) => {
                if (mat.length > 3) {
                  const n = g[Number.parseInt(mat.slice(mat.length - 1))];
                  return (
                    <div className="p-4 border-2 rounded-lg mx-2 my-4">
                      {/* <p>YES</p> */}
                      <small>{n.note}</small>
                    </div>
                  );
                } else {
                  return (
                    <div className="p-4 border-2 rounded-lg mx-2 my-4">
                      {/* <p>{temp}</p> */}
                    </div>
                  );
                }
              };

              if (
                !m.startsWith("Brand") &&
                !m.startsWith("Model") &&
                !temp.startsWith("NO")
              ) {
                return (
                  <div className="flex grow max-w-xs">
                    <div className="p-4 border-2 rounded-lg mx-2 my-4 max-w-sm grow terflex flex-col">
                      <h3 className="text-xl font-bold uppercase">{m}</h3>
                      <div className="flex flex-col items-center my-auto">
                        <Image
                          src={"/imgs/xlab-photoroom/delta300.png"}
                          alt="delta300"
                          width={800}
                          height={800}
                          className="mx-auto"
                        />
                      </div>
                      {DisplayWithNotes(temp)}
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* <div>{process(activeSaddle)}</div> */}
        </div>
      </div>
    </div>
  );
}

const AccessoryCard = ({ accessory }: { accessory: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-24 h-24 bg-red-500 rounded-full"></div>
      <h3 className="text-center">{accessory}</h3>
    </div>
  );
};
