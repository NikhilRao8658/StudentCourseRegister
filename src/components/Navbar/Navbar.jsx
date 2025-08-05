import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="bg-blue-600 text-white px-6 py-3 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Student Registration</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/newRegister" className="hover:underline">Register</Link></li>
            <li><Link to="/newCourse" className="hover:underline">Courses</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  