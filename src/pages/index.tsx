import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { Head } from "src/components/Head";
import { Nav } from "src/components/Nav";

import img_svgbattle from "public/projectimages/svgbattle.png";
import img_julia2wat from "public/projectimages/julia2wat.png";
import img_weather from "public/projectimages/weather.jpg";
import img_varavagar from "public/projectimages/varavagar.jpg";
import img_climatevisualizer from "public/projectimages/climatevisualizer.png";
import img_wasmmozart from "public/projectimages/wasmMozart.png";
import img_wasmshakespeare from "public/projectimages/wasmShakespeare.png";
import { AndyfxLogoAnimated } from "src/components/AndyfxLogoAnimated";
import { AndersSignature } from "src/components/AndersSignature";

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
      <div className="flex justify-center items-center my-12">
        <AndyfxLogoAnimated />
        <h1 className="font-thin text-4xl">Andyfx</h1>
      </div>

      {/* Projects */}
      <main className="flex justify-center mt-4 mb-8">
        <div className="mx-4">
          <div className="flex justify-center mb-6">
            <h2 className="text-4xl text-neutral-600 dark:text-neutral-300 font-normal">Latest Projects</h2>
          </div>

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
            description="How much water a tree would need and weather forecast in both visual and table format."
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
        <div className="md:grid md:grid-cols-2">
          <div className="mb-2">
            <h2 className="text-4xl text-neutral-600 dark:text-neutral-300 font-normal">Contact</h2>
            <p className="text-lg">andersgee@gmail.com</p>
          </div>
          <AndersSignature />
        </div>
      </div>
    </>
  );
};

/*
const Footer = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.paper};

  > div {
    display: flex;
    justify-content: center;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 100%;
    max-width: 1000px;

    @media ${(props) => props.theme.media.md_and_above} {
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

*/

export default Home;

type CardProps = {
  img: StaticImageData;
  href: string;
  label: string;
  description: string;
  flipOrder?: boolean;
};

function Card({ href, img, label, description, flipOrder }: CardProps) {
  return (
    <div className="mb-10 w-full shadow-md bg-white dark:bg-neutral-800 rounded-lg overflow-hidden md:grid md:grid-cols-2">
      <a href={href} className={`${flipOrder ? "md:order-last" : ""}`}>
        <div className={`relative h-40 md:h-52`}>
          <Image alt="Svg Battle" src={img} layout="fill" objectFit="cover" />
        </div>
      </a>
      <div className="h-40 m-4 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-4xl text-neutral-700 dark:text-neutral-200 font-normal">{label}</h3>
          <p className="">{description}</p>
        </div>
        <a
          className="mx-auto bg-indigo-200 hover:bg-indigo-100 dark:bg-indigo-900 dark:hover:bg-indigo-800 ease-out duration-150 p-2 rounded-full w-40 text-center underline decoration-dotted hover:decoration-solid"
          href={href}
        >
          {label}
        </a>
      </div>
    </div>
  );
}
