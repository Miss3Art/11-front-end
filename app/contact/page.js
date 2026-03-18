export default function Contact() {
  return (
    <div className="h-screen flex">
      <div className="flex w-full w-1/2 bg-emerald-600 text-white items-center justify-center p-12">
        <div>
          <h1 className="text-6xl font-bold mb-6">Contact me</h1>
          <p className="text-lg opacity-90">
            Have a project in mind? Questions? Opportunities? Reach out and lets build something great.
          </p>
        </div>
      </div>
      <div className="w-full w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white w-full p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Info</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold text-emerald-600">contact@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-lg font-semibold text-emerald-600">+976 9999 9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
