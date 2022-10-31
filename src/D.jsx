import React,{useContext} from "react";
import { LoveName, Wedding } from "./App";
export default function D() {
const name = useContext(LoveName);
const when = useContext(Wedding);

  return (
    <>
<h1>Sukhpreet</h1>
<h1>Singh</h1>
<h1>{name}</h1>
<h1>yess {when}</h1>
      {/* <LoveName.Consumer>
        {(api) => {
          return (
            <Wedding.Consumer>
              {(viah) => {
                return (
                  <h1>
                    Hello this is Sukhpreet Singh. {api} {viah}
                  </h1>
                );
              }}
            </Wedding.Consumer>
          );
        }}
      </LoveName.Consumer> */}
    </>
  );
}
