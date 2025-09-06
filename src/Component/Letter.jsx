import { BookOpen } from 'lucide-react';

const Letter = () => {
  return (
    <section className = "bg-[#D9D9D4] min-h px-40 py-40">
      <div className = "flex justify-center gap-30 items-center">
        <div>
          <h1 className = "w-135 text-6xl head-font">SUBSCRIBE TO OUR NEWSLETTER</h1>
        </div>
        <div>
          <p className = "text-2xl text-stone-600 body-font mb-4">Your next favorite read is just one newsletter away.</p>
          <div className = "flex">
            <input type="text" placeholder = "Add your e-mail" className = "border-none focus:outline-none body-font mb-2 text-md"/>
            <button>
              <BookOpen className = "w-6 h-6 ml-20 hover:text-stone-600"/>
            </button>
          </div>
          <div className = "border-b w-80"></div>
        </div>
      </div>
    </section>
  )
}

export default Letter
