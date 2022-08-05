import "./hero.scss";

function Hero() {
  return (
    <div data-aos="fade-up" className="hero">
      <div className="hero_left">
        <h1 className="hero_h1">Raqamli dunyo mahsulotlarini yetkazish</h1>
        <p className="hero_text">
          Biz, jamoamiz bilan birga so'ngi texnologiya va bilimlardan
          foydalanib, biznesingizga mukammal yechimlar taklif qilamiz.
        </p>
        <button className="hero_btn">
          Admin
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-play-btn-fill" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
