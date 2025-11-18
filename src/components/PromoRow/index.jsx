const PromoRow = () => {
  return (
    <div className="container container-fluid">
      <div className="l-promo row no-gutters">
        <div className="l-promo__col col-md">
          <div className="c-text-promo">
            <div className="c-text-promo__content c-image-card">
              <h2 className="h3">Patients & Caregivers</h2>
              <div className="c-article-card__background h-placeholder-image h-placeholder-image--3-2">
                <img
                  src="https://placehold.co/700x400/EEE/DDD?text=FPO"
                  alt=""
                  loading="lazy"
                  disablewebedit="false"
                  className="is-loaded"
                />
              </div>
              <div>
                Take control through personalized, adaptive learning
                experiences.
              </div>
            </div>
          </div>
        </div>

        <div className="l-promo__col col-md">
          <div className="c-text-promo">
            <div className="c-text-promo__content c-image-card">
              <h2 className="h3">Healthcare Professionals</h2>
              <div className="c-article-card__background h-placeholder-image h-placeholder-image--3-2">
                <img
                  src="https://placehold.co/700x400/EEE/DDD?text=FPO"
                  alt=""
                  loading="lazy"
                  disablewebedit="false"
                  className="is-loaded"
                />
              </div>
              <div>
                Empower patient care with comprehensive, trusted educational
                tools.
              </div>
            </div>
          </div>
        </div>

        <div className="l-promo__col col-md">
          <div className="c-text-promo">
            <div className="c-text-promo__content c-image-card">
              <h2 className="h3">Community Partners</h2>
              <div className="c-article-card__background h-placeholder-image h-placeholder-image--3-2">
                <img
                  src="https://placehold.co/700x400/EEE/DDD?text=FPO"
                  alt=""
                  loading="lazy"
                  disablewebedit="false"
                  className="is-loaded"
                />
              </div>
              <div>
                Bring transformative health education to your local and
                professional networks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoRow;
