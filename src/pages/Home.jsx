export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://i.pinimg.com/originals/3a/82/56/3a8256b391b0de71639848f2815c2b14.gif')] bg-no-repeat bg-cover text-white">
      <h1 className="text-5xl font-bold mb-16 text-slate-300">BrandBrain</h1>
      <p className="text-lg mb-10 text-center max-w-md text-slate-300">
        Welcome to the BrandBrain! Test your skills and see if you can guess the
        correct answer. Are you ready to play?
      </p>
      <div className="flex space-x-4">
        <button className="btn glas btn-lg text-slate-300">Join Room</button>
      </div>
    </div>
  );
}
