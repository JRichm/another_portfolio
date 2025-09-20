export default function Hero() {
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen pt-16 px-4 gap-8 bg-gray-900">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold">JR</span>
            </div>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Hi, I'm James Richmond
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    Full-Stack Developer & Problem Solver
                </h2>
            </div>
            <div className="max-w-3xl text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in turning impossible problems into "oh wait, that actually works." Using Python, TypeScript, React, and cloud technologies like AWS and GCS, I build solutions that solve real world problems, and only break sometimes.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                    Download Resume
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium">
                    View My Work
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full max-w-4xl">
                <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Years Experience</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">7+</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Redbulls / week</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">LinkedIn Connections</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Works on my machine</p>
                </div>
            </div>
        </div>
    )
}