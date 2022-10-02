import type { NextPage } from "next";
import { Head } from "src/components/Head";
import { Nav } from "src/components/Nav";

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
      <main className="flex justify-center mt-4 mb-8">
        <div>content</div>
      </main>
    </>
  );
};

export default Home;
