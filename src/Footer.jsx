const Footer = () => {
  return (
    <section className = "bg-[#1A1A1A] min-h px-50 pt-50 pb-40 flex justify-center items-center text-center">
      <div>
        <h1 className = "text-[#D9D9D4] text-4xl head-font mb-4">FOLIORA</h1>
        <p className = "text-[#D9D9D4] w-70 text-md body-font">Your place for discovering books worth remembering.</p>
        <div className = "text-[#D9D9D4] head-font text-sm flex justify-center gap-4 mt-4">
          <a className = "hover:text-[#AFAFA8]" href="https://www.instagram.com/paawankatiyar/">In.</a>
          <a className = "hover:text-[#AFAFA8]" href="https://www.linkedin.com/in/paawan-katiyar-907b49327/">Li.</a>
          <a className = "hover:text-[#AFAFA8]" href="https://github.com/PaawanKatiyar">Gh.</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
