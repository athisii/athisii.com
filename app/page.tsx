import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-cyan-900">
            <div className="flex gap-3 flex-col items-center justify-center text-white rounded-lg p-4 shadow-lg bg-cyan-700 hover:bg-gray-600
             w-[90%] lg:w-1/3">
                <Image className="animate-[spin_3s_linear_infinite]"
                       src="/world64.png" alt="my world" width={64} height={64}/>
                <h1 className="text-4xl">Work in progress.</h1>
                <p className="text-xl">Check back later!</p>
            </div>
        </div>
    );
};
