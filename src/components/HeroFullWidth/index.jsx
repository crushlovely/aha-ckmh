function HeroFullWidth({
  theme = "red",
  imgSrc,
  imgAlt = "",
  logoSrc = "//heart.org/-/media/Project/Common/Labels/aha_heart.svg?h=256&w=200&sc_lang=en&hash=28705EFDBA90D25DE94E162209E89C66",
  logoText,
  heading,
  subHeading,
  buttonText,
  buttonUrl,
  buttonTarget = "_self",
  contentTheme = "black",
}) {
  return (
    <div className={`c-hero-full h-theme--${theme}`}>
      <div className="c-hero-full__media h-placeholder-image h-placeholder-image--bg">
        <img
          src={imgSrc}
          alt={imgAlt}
          width="1910"
          height="630"
          loading="lazy"
          disablewebedit="False"
          className="is-loaded"
        />
      </div>
      <div className="c-hero-full__content-container container container-fluid">
        <div className="row no-gutters w-100">
          <div
            className={`col-md-6 c-hero-full__content-box-wrapper c-hero-full__content-box-wrapper--theme-${contentTheme}`}
          >
            <div className="c-hero-full__logo">
              <img
                src={logoSrc}
                alt=""
                loading="lazy"
                className="c-hero-card__kicker-icon is-loaded"
                data-lazy-img-loading={logoSrc}
              />
              {logoText && <span className="h3">{logoText}</span>}
            </div>
            <div className="c-hero-full__content">
              <h1 className="c-hero-full__heading">{heading}</h1>
              <p className="c-hero-full__subheading">{subHeading}</p>
            </div>
            {buttonText && buttonUrl && (
              <div className="d-md-inline-flex c-hero-card__btn-side-by-side">
                <a
                  target={buttonTarget}
                  title={buttonText}
                  rel={
                    buttonTarget === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  href={buttonUrl}
                  className={`btn btn-round btn-primary h-theme--${theme}`}
                >
                  {buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFullWidth;
