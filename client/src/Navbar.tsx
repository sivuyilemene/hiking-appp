

const Navbar = () => {
    return (
        <nav className="bg-amber-500 text-white">
          <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold hover:text-white-300">LENS</div>
    
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-lg hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
    
    export default Navbar;