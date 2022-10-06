import type { NextPage } from "next";
import { Head } from "src/components/Head";
import { Nav } from "src/components/Nav";
import { AndyfxLogoAnimated } from "src/components/AndyfxLogoAnimated";
import { AndersSignature } from "src/components/AndersSignature";
import { Card, CardNonstatic } from "src/components/Card";

import img_sharpest from "public/projectimages/sharpest.png";
import img_redditnews from "public/projectimages/redditnews.png";
import img_randomsvgface from "public/projectimages/randomsvgface.png";
import img_svgbattle from "public/projectimages/svgbattle.png";
import img_julia2wat from "public/projectimages/julia2wat.png";
import img_weather from "public/projectimages/weather.jpg";
import img_varavagar from "public/projectimages/varavagar.jpg";
import img_climatevisualizer from "public/projectimages/climatevisualizer.png";
import img_wasmmozart from "public/projectimages/wasmMozart.png";
import img_wasmshakespeare from "public/projectimages/wasmShakespeare.png";

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
      <div className="flex justify-center items-center my-16">
        <AndyfxLogoAnimated />
        <h1 className="font-thin text-4xl text-neutral-700 dark:text-neutral-200">Andyfx</h1>
      </div>

      {/* Projects */}
      <main className="flex justify-center mt-4 mb-8">
        <div className="mx-4">
          <div className="flex justify-center mb-6">
            <h2 className="text-2xl text-neutral-600 dark:text-neutral-300 font-normal">Latest Projects</h2>
          </div>

          <Card
            priority
            href="https://sharpest.andyfx.net"
            img={img_sharpest}
            label="Sharpest pokemon"
            description="Cast your vote on who the sharpest pokemon is."
            flipOrder
          />
          <Card
            href="https://news.andyfx.net"
            img={img_redditnews}
            label="Reddit news"
            description="Simple overview of reddit news. Uses incremental static regeneration."
          />
          <CardNonstatic
            href="https://randomsvgface.andyfx.net"
            img="https://randomsvgface.andyfx.net"
            label="Random svg face"
            description="An image url that returns a different avatar image every time."
            flipOrder
          />

          <Card
            href="https://svgbattle.andyfx.net"
            img={img_svgbattle}
            label="Svg Battle"
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
        </div>
      </main>

      {/* Footer */}
      <div className="flex justify-center">
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
      </div>
    </>
  );
};

export default Home;
