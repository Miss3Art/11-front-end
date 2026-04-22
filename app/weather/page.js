export default function ContentPage() {
    return ( 
        <div className="bg-slate-900 text-white flex p-6 gap-6">
            <div className="w-40 bg-slate-800 rounded-2xl p-6 flex flex-col gap-8">
                <div className="text-2xl font-bold">☁</div>
                <div className="flex flex-col gap-20">
                    <div className="flex items-center gap-3">
                        <span>🌤</span>
                        <span>Weather</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>📊</span>
                        <span>Cities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>🗺️</span>
                        <span>Map</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>⚙️</span>
                        <span>Settings</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold">Madrid</h1>
                            <p className="text-slate-400">Chance of rain: 0%</p>
                            <h2 className="text-6xl font-bold mt-4">31°</h2>
                        </div>
                        <div className="text-8xl">☀</div>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-6">
                        <h3 className="text-slate-400 mb-4">Todays Forecast</h3>

                        <div className="grid grid-cols-6 gap-4 text-center">
                            <div>
                                <p className="text-slate-400">6:00 AM</p>
                                <p className="text-2xl">☁</p>
                                <p>25°</p>
                            </div>
                            <div>
                                <p className="text-slate-400">9:00 AM</p>
                                <p className="text-2xl">🌤️</p>
                                <p>28°</p>
                            </div>
                            <div>
                                <p className="text-slate-400">12:00 PM</p>
                                <p className="text-2xl">☀️</p>
                                <p>33°</p>
                            </div>
                            <div>
                                <p className="text-slate-400">3:00 PM</p>
                                <p className="text-2xl">☀️</p>
                                <p>34°</p>
                            </div>
                            <div>
                                <p className="text-slate-400">6:00 PM</p>
                                <p className="text-2xl">☀️</p>
                                <p>32°</p>
                            </div>
                            <div>
                                <p className="text-slate-400">9:00 PM</p>
                                <p className="text-2xl">🌤️</p>
                                <p>30°</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-slate-400">Air Conditions</h3>
                            <button className="bg-sky-500 px-4 py-1 rounded-full text-sm">
                                See more
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🌡️</span>
                                <div>
                                    <p className="text-slate-400">Real Feel</p>
                                    <p className="text-2xl font-semibold">30°</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">💨</span>
                                <div>
                                    <p className="text-slate-400">Wind</p>
                                    <p className="text-2xl font-semibold">0.2 km/h</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">💧</span>
                                <div>
                                    <p className="text-slate-400">Chance of rain</p>
                                    <p className="text-2xl font-semibold">0%</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">☀️</span>
                                <div>
                                    <p className="text-slate-400">UV Index</p>
                                    <p className="text-2xl font-semibold">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 bg-slate-800 rounded-2xl p-6 shrink-0">
                    <h3 className="text-slate-400 mb-6">7-Day Forecast</h3>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <span>Today</span>
                            <span>☀ Sunny</span>
                            <span>36/22</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Tue</span>
                            <span>☀ Sunny</span>
                            <span>37/21</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Wed</span>
                            <span>☀ Sunny</span>
                            <span>37/21</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Thu</span>
                            <span>☁ Cloudy</span>
                            <span>37/21</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Fri</span>
                            <span>☁ Cloudy</span>
                            <span>37/21</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Sat</span>
                            <span>☁ Cloudy</span>
                            <span>37/21</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Sun</span>
                            <span>⛈ Storm</span>
                            <span>37/21</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
