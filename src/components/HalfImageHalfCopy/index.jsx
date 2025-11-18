function HalfImageHalfCopy({
  imgPosition = "left",
  label,
  heading,
  subheading,
  imgSrc,
  imgAlt,
  buttonText,
}) {
  const MEDIA_COL_CLASS = imgPosition === "left" ? "" : "c-promo--last-md";
  const CONTENT_COL_CLASS = imgPosition === "left" ? "c-promo--last-md" : "";
  return (
    <div className="container container-fluid">
      <div className="l-section">
        <div className="l-promo l-promo--full-width">
          <div className={`l-promo__col ${MEDIA_COL_CLASS}`}>
            <div className="c-promo__media h-placeholder-image h-placeholder-image--bg h-placeholder-image--bg-sm">
              <img src={imgSrc} alt={imgAlt} className="is-loaded" />
            </div>
          </div>
          <div className={`l-promo__col c-promo--last-sm ${CONTENT_COL_CLASS}`}>
            <div className="c-promo c-promo--half c-promo--bg h-theme--white h-text-contrast">
              <div className="row no-gutters w-100">
                <div className="col-md-12 col-lg-12">
                  <div className="c-promo__content">
                    {label && (
                      <div className="c-promo__content-label">{label}</div>
                    )}
                    <div className="c-promo__content-heading h2 mb-4">
                      {heading}
                    </div>
                    <p className="c-promo__content-subheading">{subheading}</p>
                  </div>
                  {buttonText && (
                    <div className="c-promo__actions--full-width">
                      <div className="d-md-inline-flex c-hero-card__btn-side-by-side">
                        <a href="#" className="btn btn-round btn-primary col">
                          {buttonText}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HalfImageHalfCopy;
