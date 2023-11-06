import { Card } from "./_components/Card";
import { seo } from "#src/utils/seo";
import { AndersSignature } from "./_components/AndersSignature";

import img_svgbattle from "public/projectimages/svgbattle.png";
//import img_sharpest from "public/projectimages/sharpest.png";
import img_redditnews from "public/projectimages/redditnews.png";
import img_cssbattlesinsvg from "public/projectimages/cssbattlesinsvg.png";
import img_julia2wat from "public/projectimages/julia2wat.png";
import img_weather from "public/projectimages/weather.jpg";
import img_varavagar from "public/projectimages/varavagar.jpg";
import img_climatevisualizer from "public/projectimages/climatevisualizer.png";
import img_wasmmozart from "public/projectimages/wasmMozart.png";
import img_wasmshakespeare from "public/projectimages/wasmShakespeare.png";
import img_musker from "public/projectimages/musker.png";
import img_covidstats from "public/projectimages/covidstats.png";
import img_multiplayerbattle from "public/projectimages/multiplayerbattle.png";
import img_howler from "public/projectimages/howler.png";
import img_randomsvgface from "public/projectimages/randomsvgface.png";

export const metadata = seo({
  title: "Andyfx - latest projects and contact",
  description: "Andyfx latest web projects and contact.",
  url: "/",
  image: "/icons/favicon-512x512.png",
});

export default function Page() {
  return (
    <>
      <main className="mx-2 flex justify-center">
        <div>
          <div className="mt-10 flex justify-center">
            <div className="flex items-center">
              <AndyfxLogoAnimated />
              <h1 className="text-3xl font-light">Andyfx</h1>
            </div>
          </div>
          <div className="my-6 flex justify-center">
            <p>A collection of some of my web related projects.</p>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center">
            <Card
              priority
              href="https://howler.andyfx.net"
              src={img_howler}
              title="Howler"
              description="Looking for something to do? A place to quickly find or plan stuff to do with friends, or with anyone really."
            />

            <Card
              href="https://musker.andyfx.net"
              src={img_musker}
              title="Musker"
              description="A Twitter clone. Share whats happening. With tweets, retweets, replies, likes, personal feed, direct messaging etc."
            />
            <Card
              href="https://svgbattle.andyfx.net"
              src={img_svgbattle}
              title="SVG battle"
              description="Write svg images by hand with the least amount of characters. Compete against others and create your own images."
            />
            {/*
            <Card
              href="https://sharpest.andyfx.net"
              src={img_sharpest}
              title="Sharpest pokemon"
              description="Cast your vote on who the sharpest pokemon is."
            />
            */}
            <Card
              href="https://covidstats.andyfx.net"
              src={img_covidstats}
              title="Covid stats"
              description="Simple overview of covid cases in Sweden. Based on official data from Folkhälsomyndigheten."
            />
            <Card
              href="https://news.andyfx.net"
              src={img_redditnews}
              title="Reddit news"
              description="Simple overview of reddit news and reddit worldnews."
            />

            <Card
              href="https://randomsvgface.andyfx.net"
              src={img_randomsvgface}
              title="Random svg face"
              description="An image url that returns a different avatar image every time."
            />

            <Card
              href="https://cssbattlesinsvg.andyfx.net"
              src={img_cssbattlesinsvg}
              title="CSSbattles in svg"
              description="Css Battle but written in svg. Includes some svg animations."
            />
            <Card
              href="https://julia2wat.herokuapp.com"
              src={img_julia2wat}
              title="julia2wat"
              description="Online version of WebAssemblyText.jl. Convert Julia to WebAssembly text."
            />
            <Card
              href="https://weather.andyfx.net/"
              src={img_weather}
              title="Weather"
              description="How much water a tree needs and weather forecast. Both table and visual format."
            />
            <Card
              href="https://www.varavagar.se"
              src={img_varavagar}
              title="Sweden Roads"
              description="Map, information and maintenance needs for public roads of Sweden."
            />
            <Card
              href="https://www.climatevisualizer.com"
              src={img_climatevisualizer}
              title="Climate Visualizer"
              description="What the worlds carbon budget means on a local municipality level."
            />
            <Card
              href="https://battle.andyfx.net"
              src={img_multiplayerbattle}
              title="Multiplayer battle"
              description="A simple multiplayer game. Built with webgl, webassembly and rust."
            />
            <Card
              href="https://andersgee.github.io/posts/wasmMozart/index.html"
              src={img_wasmmozart}
              title="Mozart AI"
              description="Neural net trained on mozart music brought to the web with webassembly."
            />
            <Card
              href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
              src={img_wasmshakespeare}
              title="Shakespeare AI"
              description="Neural net trained on shakespeare text brought to the web with webassembly."
            />
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="mt-10 flex justify-center">
        <div className="mb-8 max-w-xl flex-1 md:grid md:grid-cols-2">
          <div className="mb-8 flex justify-center md:mt-8">
            <div>
              <h2 className="text-neutral-600 dark:text-neutral-300 text-center text-4xl font-normal">Contact</h2>
              <p className="text-center text-lg">andersgee@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center">
            <AndersSignature />
          </div>
        </div>
      </footer>
    </>
  );
}

function AndyfxLogoAnimated() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100">
      <title>Andyfx Logo</title>
      <path
        fill="none"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="hsl(353, 100%, 45%)"
        d="M 18 92 L 39 30 L 75 80 L 102 8"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          fill="freeze"
          dur="0.35s"
          calcMode="spline"
          begin="0s"
          restart="never"
          values="M 18 92 L 18 92 L 18 92 L 18 92 ;
    M 18 92 L 39 30 L 39 30 L 39 30 ;
    M 18 92 L 39 30 L 75 80 L 75 80 ;
    M 18 92 L 39 30 L 75 80 L 102 8"
          keyTimes="0 ; 0.333 ; 0.666; 1"
          keySplines="0.45 0 0.55 1 ; 0.45 0 0.55 1; 0.45 0 0.55 1"
        />
      </path>

      <path
        fill="none"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="hsl(206, 76%, 80%)"
        d="M 18 92 L 102 8"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          fill="freeze"
          dur="0.35s"
          calcMode="spline"
          begin="0s"
          restart="never"
          values="M 18 92 L 18 92 ;
            M 18 92 L 102 8"
          keyTimes="0 ; 1"
          keySplines="0.45 0 0.55 1"
        />
      </path>
    </svg>
  );
}
