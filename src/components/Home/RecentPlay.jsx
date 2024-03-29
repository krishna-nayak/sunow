/* eslint-disable */
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import "./Main.css";

/*export default function RecentPlay() {
  return (
    <div className=" self-stretch  max-h-[500px] md:block hidden relative">
      <div className="bg-[#e2e2f2] mx-auto max-w-[400px] h-full shadow-xl rounded-2xl p-6 text-center">
        <div className="flex flex-col h-full justify-around">
          <div className="max-w-xs mx-auto">
            <img
              src="https://i1.sndcdn.com/artworks-3ITTy648eljqFP3e-LGDfnQ-t500x500.jpg"
              alt="heatwave"
              className="mx-auto rounded-2xl"
              width={250}
            />
            {/* <img src="https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png" alt="heatwave" className="mx-auto rounded-2xl w-full" width={300} /> */
/*</div>
          {/* <div className="mt-2"> */
/*<div>
            <h1>Heat Waves</h1>
            <h4>glass animals</h4>
          </div>
          <div className="relative mt-2">
            <div className="w-full border-2"></div>
            <div className="w-1/2 border-2 border-orange-400 absolute top-0"></div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>1:21</span>
              <span>4:21</span>
            </div>
          </div>

          <div className="flex items-center justify-evenly mt-2">
            <GiPreviousButton size={20} color="rgb(251 146 60)" />
            <GiFastBackwardButton size={20} color="rgb(251 146 60)" />
            <BsFillPlayCircleFill
              size={40}
              color="rgb(251 146 60)"
              className="shadow-2xl shadow-slate-600"
            />
            <GiFastForwardButton size={20} color="rgb(251 146 60)" />
            <GiNextButton size={20} color="rgb(251 146 60)" />
          </div>
        </div>
      </div>
    </div>
  );
}*/
export default function RecentPlay() {
  return (
    <div class="super_container">
      <div class="container">
        <iframe src="https://open.spotify.com/embed/artist/5Rl15oVamLq7FbSb0NNBNy?utm_source=generator" width="400" height="400" frameBorder="0" allow="encrypted-media"></iframe>
        <div class="box left">
          <i class="fa-solid fa-backward-step"></i>
        </div>
        <div class="box right">
          <i class="fa-solid fa-forward-step"></i>
        </div>
      </div>
    </div>
  );
}
