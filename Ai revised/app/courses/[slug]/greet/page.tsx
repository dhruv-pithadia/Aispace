import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <Head>
        <title>Do Better</title>
        <meta name="description" content="Never miss a note, idea, or connection." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center">
        <button className="bg-gray-800 text-sm px-4 py-2 rounded-full hover:bg-gray-700 mb-6">
          Thanks For Choosing this course
        </button>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Enlight yourself with Ai Spaces
        </h1>
        <p className="text-gray-400 mb-8">Never miss a note, idea or connection.</p>
        <button className="bg-purple-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700">
          Let's get started
        </button>
        <div className="mt-10">
          <div className="w-full h-48 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

