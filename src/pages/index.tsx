import type { NextPage } from "next";
import { Head } from "src/components/Head";
import { Nav } from "src/components/Nav";
import { AndyfxLogoAnimated } from "src/components/AndyfxLogoAnimated";
import { AndersSignature } from "src/components/AndersSignature";
import { Card, CardNonstatic } from "src/components/Card";

import img_svgbattle from "public/projectimages/svgbattle.png";
import img_sharpest from "public/projectimages/sharpest.png";
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

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="andyfx"
        description="Andyfx latest web projects and contact."
        domainUrl="https://www.andyfx.net"
        url="https://www.andyfx.net"
      />
      <Nav />
      {/* Header */}
      <header className="flex justify-center items-center my-16">
        <AndyfxLogoAnimated />
        <h1 className="font-extralight text-4xl text-neutral-700 dark:text-neutral-100">Andyfx</h1>
      </header>

      {/* Projects */}
      <main className="flex justify-center mt-4 mb-8">
        <section className="mx-4" title="Latest Projects">
          <div className="flex justify-center mb-10">
            <div>
              <h2 className="text-2xl text-neutral-600 text-center mb-4 dark:text-neutral-300 font-normal">
                Latest Projects
              </h2>
              <p>A collection of some of my web related projects that I found fun, interesting or useful.</p>
            </div>
          </div>

          <Card
            priority
            href="https://howler.andyfx.net"
            img={img_howler}
            label="Howler"
            description="Looking for something to do? A place to quickly find or plan stuff to do with friends, or with anyone really."
          />
          <Card
            priority
            href="https://battle.andyfx.net"
            img={img_multiplayerbattle}
            label="Multiplayer battle"
            description="A simple multiplayer game. Built with webgl, webassembly and rust."
            flipOrder
          />
          <Card
            href="https://musker.andyfx.net"
            img={img_musker}
            label="Musker"
            description="A Twitter clone. Share whats happening. With tweets, retweets, replies, likes, personal feed, direct messaging etc."
          />
          <Card
            href="https://svgbattle.andyfx.net"
            img={img_svgbattle}
            label="SVG battle"
            description="Write svg images by hand with the least amount of characters. Compete against others and create your own images."
            flipOrder
          />
          <Card
            href="https://sharpest.andyfx.net"
            img={img_sharpest}
            label="Sharpest pokemon"
            description="Cast your vote on who the sharpest pokemon is."
          />
          <Card
            href="https://covidstats.andyfx.net"
            img={img_covidstats}
            label="Covid stats"
            description="Simple overview of covid cases in Sweden. Based on official data from Folkhälsomyndigheten."
            flipOrder
          />
          <Card
            href="https://news.andyfx.net"
            img={img_redditnews}
            label="Reddit news"
            description="Simple overview of reddit news and reddit worldnews."
          />
          <CardNonstatic
            href="https://randomsvgface.andyfx.net"
            img="https://randomsvgface.andyfx.net"
            label="Random svg face"
            description="An image url that returns a different avatar image every time."
            flipOrder
          />
          <Card
            href="https://cssbattlesinsvg.andyfx.net"
            img={img_cssbattlesinsvg}
            label="CSSbattles in svg"
            description="Css Battle but written in svg. Includes some svg animations."
          />
          <Card
            href="https://julia2wat.herokuapp.com"
            img={img_julia2wat}
            label="julia2wat"
            description="Online version of WebAssemblyText.jl. Convert Julia to WebAssembly text."
            flipOrder
          />
          <Card
            href="https://weather.andyfx.net/"
            img={img_weather}
            label="Weather"
            description="How much water a tree needs and weather forecast. Both table and visual format."
          />
          <Card
            href="https://www.varavagar.se"
            img={img_varavagar}
            label="Sweden Roads"
            description="Map, information and maintenance needs for public roads of Sweden. (VåraVägar.se)"
            flipOrder
          />
          <Card
            href="https://www.climatevisualizer.com"
            img={img_climatevisualizer}
            label="Climate Visualizer"
            description="What the worlds carbon budget means on a local municipality level."
          />
          <Card
            href="https://andersgee.github.io/posts/wasmMozart/index.html"
            img={img_wasmmozart}
            label="Mozart AI"
            description="Neural net trained on mozart music brought to the web with webassembly."
            flipOrder
          />
          <Card
            href="https://andersgee.github.io/posts/wasmShakespeare/index.html"
            img={img_wasmshakespeare}
            label="Shakespeare AI"
            description="Neural net trained on shakespeare text brought to the web with webassembly."
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="flex justify-center">
        <div className="md:grid md:grid-cols-2 mb-8 flex-1 max-w-xl">
          <div className="flex justify-center mb-8 md:mt-8">
            <div>
              <h2 className="text-center text-4xl text-neutral-600 dark:text-neutral-300 font-normal">Contact</h2>
              <p className="text-lg text-center">andersgee@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center">
            <AndersSignature />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
