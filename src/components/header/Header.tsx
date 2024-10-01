import { FC, } from 'react';

const Header: FC = () => {


    return (
        <div className='container'> 
            <nav className=" p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-2xl font-bold">
                        Logo
                    </div>
                    <ul className={`md:flex space-x-8 text-black hidden `}>
                        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                    <div className="md:hidden text-black text-2xl" >
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;
