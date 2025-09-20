export default function Hero() {
    return (
        <div className="flex flex-col w-full items-center justify-center h-screen gap-6">
            <div>
                <div className="w-64 aspect-square bg-red-500 rounded-full">

                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold">Hi I'm James Richmond</h1>
            </div>
            <div>
                <h5 className="text-2xl">Plugging things in w a spit of redbull</h5>
            </div>
            <div className="flex flex-col items-center">
                <h6 className="w-1/2 text-center">In a buttshell, I write code that solves problems that shouldnt exist in the first place. I specialize in creating software solutions for people and customers who get paid to complain, utilizing languages including but not limited to python, java/typescript, c# and technoligies like pandas, panel, pygame, react, django, AWS, GCS and pygame</h6> 
            </div>
            <div>
                <div className="flex flex-row gap-4">
                    <button className="hover:cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium border-none">download resume</button>
                    <button className="hover:cursor-pointer px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-colors duration-200 font-medium">view my work</button>
                </div>
            </div>
            <div className="flex flex-row gap-24">
                <div className="flex flex-col items-center">
                    <p className="text-amber-600 text-5xl font-bold">5</p>
                    <p>weekly redbulls</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-amber-600 text-5xl font-bold">6/7</p>
                    <p>jorks completed</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-amber-600 text-5xl font-bold">40+</p>
                    <p>hours wasted</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-amber-600 text-5xl font-bold">100%</p>
                    <p>clitoral satisfaction</p>
                </div>
            </div>
        </div>
    )
}