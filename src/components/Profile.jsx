import React from "react";
import Tushar from "../assets/tushar.jpeg";
import bgtop from "../assets/bg-pattern-top.svg";
import bgbottom from "../assets/bg-pattern-bottom.svg";
import bgcard from "../assets/bg-pattern-card.svg";
export default function Profile() {
  return (
    <>
      <div className="bg-[hsl(185,75%,39%)] overflow-hidden h-screen">
        <div className="relative h-screen">
          <img
            src={bgtop}
            alt="bgtop"
            className="absolute -top-[10rem] -left-[12rem] lg:-top-[40rem] lg:-left-[20rem] xl:-left-[10rem] w-auto h-auto  z-[1]"
          />  
          <img
            src={bgbottom}
            alt="bgbottom"
            className="absolute -bottom-[10rem] -right-[10rem] lg:-bottom-[40rem] lg:-right-[20rem] xl:-right-[10rem] w-auto h-auto z-[1]"
          />

          <div className="flex justify-center items-center h-screen z-[10]">
            <div className="cardo md:w-[26%] w-[89%] bg-white rounded-2xl z-[10]">
              <img
                src={bgcard}
                alt="bgcard"
                className="w-full rounded-t-xl -mb-[30%]"
              />
              <img
                src={Tushar}
                alt="Tushar"
                className="w-[35%] lg:mt-12 border-4 border-white rounded-full mx-auto mt-8 lg:my-8 z-[20]"
              />
              <div className="text-center text-[hsl(229,23%,23%)] my-4 lg:my-8">
                <h1 className="kumbh-sans-bold text-2xl">
                  Tushar Kumar Shah{" "}
                  <span className="kumbh-sans-regular text-[hsl(227,10%,46%)]">
                    21
                  </span>
                </h1>
                <p className="kumbh-sans-regular lg:py-2 text-[hsl(227,10%,46%)]">
                  Mohali, India
                </p>
                <div className="h-[1px] opacity-40 my-4 bg-[hsl(0,0%,59%)]"></div>

                <div class="flex justify-evenly kumbh-sans-bold">
                  <div>
                    <p className="text-xl">80K</p>
                    <p className="kumbh-sans-regular text-[10px] tracking-widest text-[hsl(227,10%,46%)]">Followers</p>
                  </div>
                  <div>
                    <p className="text-xl">803K</p>
                    <p className="kumbh-sans-regular text-[10px] tracking-widest text-[hsl(227,10%,46%)]">Likes</p>
                  </div>
                  <div>
                    <p className="text-xl">1.4K</p>
                    <p className="kumbh-sans-regular text-[10px] tracking-widest text-[hsl(227,10%,46%)]">Photos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
