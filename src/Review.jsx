const Review = () => {
  return (
    <section className = "bg-[#ECECE7] px-12 py-12">
      <div className = "flex justify-center gap-20 items-center">
        <div>
          <img className = "h-150 w-auto" src="../public/images/post/71Ge374aXuL._UF1000,1000_QL80_.jpg" alt=""/>
        </div>
        <div>
          <h3 className = "text-6xl head-font">BOOK REVIEWS</h3>
          <p className = "w-200 text-xl body-font mt-6 text-stone-600">Learn more about the most renowned literary critics of today think of the latest best selling piece.</p>
          <div className = "flex justify-center gap-10 mt-6">
            <div>
              <p className = "text-md w-110 break-normal body-font text-stone-600">“Perched on the cusp between grown-up and young-adult fiction … The Book Thief can be life-changing … it offers believable, hard-won hope.”</p>
              <p className = "mt-2 logo text-[#8C6B4E]">The New York Times - Janet Maslin</p>
            </div>
            <div>
              <p className = "text-md w-110 break-normal body-font text-stone-600">“Death is sardonic, darkly humorous, and compassionate … This is a searing narrative, absorbing and poignant. It’s not for the easily daunted, but for those who stay with it, the rewards are considerable.”</p>
              <p className = "mt-2 logo text-[#8C6B4E]">The Washington Post — Elizabeth Chang</p>
            </div>
          </div>
          <div className = "flex justify-center gap-10 mt-6">
            <div>
              <p className = "text-md w-110 break-normal body-font text-stone-600">“Beautiful and important. Elegant, philosophical and moving … a weighty novel to be savored slowly.”</p>
              <p className = "mt-2 logo text-[#8C6B4E]">Kirkus Reviews</p>
            </div>
            <div>
              <p className = "text-md w-110 break-normal body-font text-stone-600">“Deserves a place on the same shelf with The Diary of a Young Girl and Night. Zusak uses grim, darkly consoling humor reminiscent of Slaughterhouse-Five to tell a story about the transformative power of words.”</p>
              <p className = "mt-2 logo text-[#8C6B4E]">USA Today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
