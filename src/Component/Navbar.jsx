import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <section className = "px-6 py-6 bg-[#D9D9D4]">
      <div className = "flex justify-between">
        <Link to = "/">
          <h1 className = "logo text-4xl text-stone-900 ml-4">FOLIORA</h1>
        </Link>
        <div className = "nav-font flex px-6 items-center">
          <Link to = "/">
            <p className = "text-sm m-4 text-stone-600 hover:text-stone-900">HOME</p>
          </Link>
          <div className = "border-r h-5 text-stone-600"></div>
          <a href="#" className = "text-sm m-4 text-stone-600 hover:text-stone-900">LIBRARY</a>
          <div className = "border-r h-5 text-stone-600"></div>
          <a href="#" className = "text-sm m-4 text-stone-600 hover:text-stone-900">STORIES</a>
          <div className = "border-r h-5 text-stone-600"></div>          
          <a href="#" className = "text-sm m-4 text-stone-600 hover:text-stone-900">WRITE</a>
          <div className = "border-r h-5 text-stone-600"></div>          
          <a href="#" className = "text-sm m-4 text-stone-600 hover:text-stone-900">LOGIN</a>
        </div>
      </div>
    </section>
  );
}

export default Navbar
