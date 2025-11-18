const FullWidthTestimonial = () => {
  return (
    <div className="c-testimonial">
      <div className="c-testimonial__container container container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="c-testimonial__image">
              <div className="c-testimonial__image-placeholder h-placeholder-image">
                <img
                  src="assets/images/placeholder.gif"
                  data-lazy-img-loading="//placehold.it/300x300/ddd/ccc?text=FPO"
                  className="is-loading"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-7 d-flex">
            <div className="c-testimonial__content">
              <blockquote className="blockquote">
                <h2 className="h3">Nancy Williams</h2>
                <p>
                  "Fusce pulvinar facilisis nisi, id imperdiet ipsum volutpat
                  dapibus. Donec at felis a arcu ultricies dignissim. Sed
                  tincidunt libero ac eleifend consequat. Mauris massa lectus,
                  euismod at rutrum sed, pellentesque eget lectus. Etiam
                  faucibus dui ut nibh dapibus suscipit. Nullam lacus tellus,
                  varius vitae sapien sagittis, sodales blandit risus. Praesent
                  dignissim sit amet sem eu efficitur. Curabitur eu arcu
                  aliquet, ultricies libero nec, elementum justo."
                </p>
              </blockquote>
              <a href="#" className="c-cta c-cta--arrow h-theme--aqua-alt">
                Read Her Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthTestimonial;
