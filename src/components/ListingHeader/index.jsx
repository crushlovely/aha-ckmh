function ListingHeader({ heading, subheading, ctaText }) {
  return (
    <div className="container container-fluid">
      <div className="c-listing-header">
        <h2 className="c-listing-header__heading">{heading}</h2>
        <div className="c-listing-header__cta-container">
          <p className="c-listing-header__subheading">{subheading}</p>
          {ctaText && (
            <a
              href="#"
              className="c-listing-header__cta c-cta c-cta--arrow h-theme--red"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListingHeader;
