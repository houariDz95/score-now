import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl mb-4 text-center">Score $10,000 Now!</h1>
      <p className="text-lg mb-8 text-center">
        Enter your information now for a chance to win.
      </p>
      <img
        src="/assets/main.png" // Replace with the actual image path
        alt="Promotional Image"
        className="mb-8 max-w-full h-[300px] rounded-lg"
      />
      <p className="text-xl mb-4">Please choose your device:</p>
      <div className="flex space-x-4">
        <Link href="https://singingfiles.com/show.php?l=0&u=1804823&id=59493" passHref>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-6 text-sm md:text-md rounded flex flex-col items-center justify-center">
            <img src="/assets/android.png" alt="android" className='h-10 mb-2' />
            Android
          </button>
        </Link>
        <Link href="https://singingfiles.com/show.php?l=0&u=1804823&id=59494" passHref>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-6 text-sm md:text-md rounded flex flex-col items-center justify-center">
            <img src="/assets/ios.png" alt="ios" className='h-10 mb-2' />
            iOS
          </button>
        </Link>
        <Link href="https://singingfiles.com/show.php?l=0&u=1804823&id=59492" passHref>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-8 px-6 text-sm md:text-md rounded flex flex-col items-center justify-center">
            <img src="/assets/desktop.png" alt="desktop" className='h-10 mb-2' />
            Desktop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;


