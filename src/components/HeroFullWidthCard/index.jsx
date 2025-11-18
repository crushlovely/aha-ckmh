function HeroFullWidthCard({ title, subheading, buttonText, buttonUrl, imgSrc, imgAlt }) {
  return (
    <div className="full-width-hero-card">
      <div className="full-width-hero-card__container container">
        <div className="full-width-hero-card__logo">
          <img
            src="https://www.heart.org/-/media/Project/Common/Labels/aha_heart_wht.svg?h=32&w=24&sc_lang=en&hash=5D25E0172FFFED99ACB48D873EFA81CD"
            alt=""
            loading="lazy"
            className="full-width-hero-card__icon is-loaded"
            data-lazy-img-loading="https://www.heart.org/-/media/Project/Common/Labels/aha_heart_wht.svg?h=32&w=24&sc_lang=en&hash=5D25E0172FFFED99ACB48D873EFA81CD"
          />
          American Heart Association
        </div>
        <h1 className="full-width-hero-card__title">
          <span className="text-uppercase">{title}</span>
        </h1>
        <div className="full-width-hero-card__content">
          <div className="full-width-hero-card__body-content">
            <div className="full-width-hero-card__cta">
              <div className="full-width-hero-card__subheading">
                {subheading}
              </div>
              <div className="full-width-hero-card__btns">
                <a
                  title={buttonText}
                  href={buttonUrl}
                  className="btn btn-round btn-outline-primary col h-theme--red"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
          <div className="full-width-hero-card__img">
            <div>
              <img
                src={imgSrc}
                alt={imgAlt}
                width="700"
                height="400"
                loading="lazy"
                disablewebedit="False"
                className="is-loaded"
              />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFullWidthCard;
