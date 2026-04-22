import DataJson from "../../utils/data2.json";

export default function List() {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex justify-center py-14">
            <div className="w-[1100px]">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Mongolian Provinces
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Explore all provinces of Mongolia
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {DataJson.map((item) => (
                        <div key={item.id} className="group bg-white rounded-2xl p-6 shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-sky-600 transition">{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
