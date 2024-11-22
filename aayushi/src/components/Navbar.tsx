export const Navbar = () => {
  return (
    <div>
      <nav className="grid grid-flow-row space-x-2">
        <ul className="flex justify-end space-x-6 pr-20 mr-20 text-white font-semibold text-md">
          <li className="relative group">
            <a href="#" className="relative">
              Connect
            </a>

            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#" className="relative">
              Blog
            </a>

            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#" className="relative">
              Apps
            </a>

            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#" className="relative pb-2">
              Tools
            </a>

            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#" className="relative">
              About
            </a>

            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li>
            <button className="bg-amber-400 border-amber-400 rounded p-2 mx-2">Join us</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
