export default function Navbar(){
    return (
        <div className="bg-blue-500 py-4">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className="w-16 font-bold text-white">
                    DJ's website
                </div>
                <div className="nav-links duration-500 md:static absolute">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4wv] gap-8 text-white">
                        <li><a className="hover:underline" href="#">Home</a></li>
                        <li><a className="hover:underline" href="#">About</a></li>
                        <li><a className="hover:underline" href="#">Projects</a></li>
                        <li><a className="hover:underline" href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}