import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-white">
      <section className="bg-HeroPattern bg-cover bg-bottom bg-no-repeat h-screen relative">
        <div className="bg-[url('/home.jpg')] bg-cover bg-center h-[60vh] md:h-screen w-full">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg font-sans mb-6 text-shadow-[0_1.2px_1.2px_rgba(0.8,0,0,0.8)]">
              Welcome to Our Store
            </h1>
            <button
              type="button"
              className="py-2.5 px-6 text-sm md:text-base font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <Link className="text-gray-800 dark:text-white" href="/product-listing">
                View Products
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}