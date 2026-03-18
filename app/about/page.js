import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col flex-row items-center justify-center px-6 qpx-20 gap-12 py-20">
      <div className="w-1/2 space-y-6">
        <h1 className="text-5xl text-6xl font-extrabold text-emerald-400">
          About Me
        </h1>
        <p className="text-lg text-gray-400">
          <span className="font-semibold text-emerald-400">Role:</span> Student
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Nulla convallis vitae est hendrerit finibus.Etiam faucibus a ex eget mollis. 
          Praesent mi ante, placerat in erat ut, aliquam vehicula quam. Maecenas eget enim 
          et massa laoreet ultricies in eu dolor. Aliquam sit amet sollicitudin turpis. 
          Duis sed lacus quis diam lobortis pulvinar non eget leo. 
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaf1w4QgCJd6JOBTxpUyvbU6iVz6_gP2p2Q&s" 
          className="w-64 h-64 w-80 h-80 rounded-full shadow-2xl"
          alt="Profile Icon"
        />
      </div>
    </div>
  );
}
