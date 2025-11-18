const PersonalizationSignup = () => {
  return (
    <div className="container container-fluid" id="signup">
      <div className="l-promo row">
        <div className="l-promo__col col-md">
          <div className="c-promo c-promo--full-width c-promo--border c-promo--shadow h-theme--red">
            <div className="row d-flex flex-wrap">
              <div className="col flex-child--250">
                <div className="c-promo__content pr-0">
                  <h2 className="h2 h-color--red">Reserve Your Spot Today</h2>
                  <p className="h4 mb-4">
                    Be at the front of the line to join our groundbreaking
                    platform.
                  </p>
                </div>
              </div>

              <div className="col flex-child--250">
                <div
                  className="aha-sc-form-container c-aha-form"
                  id="__BVID__748___AHA_sc_form_wrapper__mi4yavsh"
                >
                  <form
                    action="/formbuilder?fxb.FormItemId=a8541879-870a-4d0c-bdf9-2bdeb4924051&fxb.HtmlPrefix=fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837"
                    data-ajax="true"
                    data-ajax-method="Post"
                    data-ajax-mode="replace-with"
                    data-ajax-success="$.validator.unobtrusive.parse('#fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_a8541879-870a-4d0c-bdf9-2bdeb4924051');$.fxbFormTracker.parse('#fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_a8541879-870a-4d0c-bdf9-2bdeb4924051');"
                    data-ajax-update="#fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_a8541879-870a-4d0c-bdf9-2bdeb4924051"
                    data-sc-fxb="a8541879-870a-4d0c-bdf9-2bdeb4924051"
                    encType="multipart/form-data"
                    id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_a8541879-870a-4d0c-bdf9-2bdeb4924051"
                    method="post"
                  >
                    {/* Hidden form fields */}
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_FormSessionId"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.FormSessionId"
                      type="hidden"
                      value="d562dc3e-9cde-43f2-86b4-5d53b19a8b85"
                    />
                    <input
                      name="__RequestVerificationToken"
                      type="hidden"
                      value="YclzKO0MenAyYtLA38RSLg50l05FaKmp56kG1HwIjjWoPkiRs9l8Y8t0sSEreFc2PPdpAMMtPudGh1q4u5x4YtJ5r7T3YmGb3eRV-aJhs8MjzRSeJkY2gJqSMS0ZqfBuVJlVOddZCUOXtMoIkRDh3w2"
                    />
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_FormItemId"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.FormItemId"
                      type="hidden"
                      value="a8541879-870a-4d0c-bdf9-2bdeb4924051"
                    />
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_PageItemId"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.PageItemId"
                      type="hidden"
                      value="cf929f81-600a-41a2-bfb5-f1b61ec74650"
                    />
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_Fields_Index_5b86534b-00c3-4c5b-b8e4-f66df86734e9"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.Fields.Index"
                      type="hidden"
                      value="5b86534b-00c3-4c5b-b8e4-f66df86734e9"
                    />
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_Fields_5b86534b-00c3-4c5b-b8e4-f66df86734e9__ItemId"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.Fields[5b86534b-00c3-4c5b-b8e4-f66df86734e9].ItemId"
                      type="hidden"
                      value="5b86534b-00c3-4c5b-b8e4-f66df86734e9"
                    />

                    {/* First Name Field */}
                    <label htmlFor="fxb_a0a4dfca-c319-4944-833d-5b3610c9ee9b_Fields_911a6bee-2697-1b88-9ccd-be68cd8ed07c__Value">
                      First Name (required)
                    </label>
                    <input
                      id="fxb_a0a4dfca-c319-4944-833d-5b3610c9ee9b_Fields_911a6bee-2697-1b88-9ccd-be68cd8ed07c__Value"
                      name="fxb.a0a4dfca-c319-4944-833d-5b3610c9ee9b.Fields[911a6bee-2697-1b88-9ccd-be68cd8ed07c].Value"
                      type="text"
                      maxLength="255"
                      placeholder=""
                      data-sc-tracking="True"
                      data-sc-field-name="firstName"
                      data-val-required="First Name is required."
                      data-val="true"
                      required
                      aria-required="true"
                    />
                    <span
                      data-valmsg-for="fxb.a0a4dfca-c319-4944-833d-5b3610c9ee9b.Fields[911a6bee-2697-1b88-9ccd-be68cd8ed07c].Value"
                      data-valmsg-replace="true"
                      className="field-validation-error"
                      role="alert"
                      aria-atomic="true"
                      id="null"
                      style={{ display: "none" }}
                    >
                      First Name is required.
                    </span>

                    {/* Last Name Field */}
                    <label htmlFor="fxb_a0a4dfca-c319-4944-833d-5b3610c9ee9b_Fields_05ef8956-6476-caf2-7bc3-18ff28ab334b__Value">
                      Last Name (required)
                    </label>
                    <input
                      id="fxb_a0a4dfca-c319-4944-833d-5b3610c9ee9b_Fields_05ef8956-6476-caf2-7bc3-18ff28ab334b__Value"
                      name="fxb.a0a4dfca-c319-4944-833d-5b3610c9ee9b.Fields[05ef8956-6476-caf2-7bc3-18ff28ab334b].Value"
                      type="text"
                      maxLength="255"
                      placeholder=""
                      data-sc-tracking="True"
                      data-sc-field-name="lastName"
                      data-val-required="Last Name (required) is required."
                      data-val="true"
                      required
                      aria-required="true"
                    />
                    <span
                      data-valmsg-for="fxb.a0a4dfca-c319-4944-833d-5b3610c9ee9b.Fields[05ef8956-6476-caf2-7bc3-18ff28ab334b].Value"
                      data-valmsg-replace="true"
                      className="field-validation-error"
                      role="alert"
                      aria-atomic="true"
                      id="null"
                      style={{ display: "none" }}
                    >
                      Last Name is required.
                    </span>

                    {/* Email Field */}
                    <label htmlFor="fxb_a0a4dfca-c319-4944-833d-5b3610c9ee9b_Fields_281ade3a-7744-6c71-04e1-61c1e876df55__Value">
                      E-mail (required)
                    </label>
                    <input
                      id="fxb_a0a4dfca-c319-4944-833d-5b3610c9ee9b_Fields_281ade3a-7744-6c71-04e1-61c1e876df55__Value"
                      name="fxb.a0a4dfca-c319-4944-833d-5b3610c9ee9b.Fields[281ade3a-7744-6c71-04e1-61c1e876df55].Value"
                      type="email"
                      maxLength="255"
                      placeholder=""
                      data-sc-tracking="True"
                      data-sc-field-name="emailrequired"
                      data-val-required="E-mail (required) is required."
                      data-val-regex="E-mail (required) contains an invalid email address."
                      data-val-regex-pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,17}$"
                      data-val="true"
                      required
                      aria-required="true"
                    />
                    <span
                      data-valmsg-for="fxb.a0a4dfca-c319-4944-833d-5b3610c9ee9b.Fields[281ade3a-7744-6c71-04e1-61c1e876df55].Value"
                      data-valmsg-replace="true"
                      className="field-validation-error"
                      role="alert"
                      aria-atomic="true"
                      id="null"
                      style={{ display: "none" }}
                    >
                      E-mail is required.
                    </span>

                    {/* Terms text */}
                    <p className="small pt-4">
                      By clicking the sign up button you agree to the{" "}
                      <a
                        href="/en/healthy-living/hfg-user-agreement"
                        className="h-color--blue"
                      >
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/en/about-us/statements-and-policies/privacy-statement"
                        className="h-color--blue"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>

                    {/* Terms Checkbox */}
                    <div
                      data-sc-field-key="2AD3A4F9A22149BD82D0A46DA8184F16"
                      className="form-group custom-control custom-checkbox"
                    >
                      <input
                        id="fxb_50e616a4-6a71-48e9-acac-20800324ad8a_Fields_Index_92a2ad27-aecd-43d5-971e-77ba9c3fc08a"
                        name="fxb.50e616a4-6a71-48e9-acac-20800324ad8a.Fields.Index"
                        type="hidden"
                        value="92a2ad27-aecd-43d5-971e-77ba9c3fc08a"
                      />
                      <input
                        id="fxb_50e616a4-6a71-48e9-acac-20800324ad8a_Fields_92a2ad27-aecd-43d5-971e-77ba9c3fc08a__ItemId"
                        name="fxb.50e616a4-6a71-48e9-acac-20800324ad8a.Fields[92a2ad27-aecd-43d5-971e-77ba9c3fc08a].ItemId"
                        type="hidden"
                        value="92a2ad27-aecd-43d5-971e-77ba9c3fc08a"
                      />
                      <input
                        type="checkbox"
                        id="fxb_50e616a4-6a71-48e9-acac-20800324ad8a_Fields_92a2ad27-aecd-43d5-971e-77ba9c3fc08a__Value"
                        name="fxb.50e616a4-6a71-48e9-acac-20800324ad8a.Fields[92a2ad27-aecd-43d5-971e-77ba9c3fc08a].Value"
                        value="true"
                        data-sc-tracking="True"
                        data-sc-field-name="TermsCheckbox"
                        data-sc-field-key="BC32242F4CD74F6D8745C98BDB12077D"
                        data-val-ischecked="TermsCheckbox is required."
                        data-val-ischecked-value="False"
                        data-val-required="The Value field is required."
                        data-val="true"
                        className="custom-control-input"
                        required
                        aria-required="true"
                      />
                      I have read and understand the&nbsp;
                      <a
                        href="/en/about-us/statements-and-policies/terms-of-service"
                        id="null"
                      >
                        Terms and Conditions
                      </a>
                      &nbsp;and&nbsp;
                      <a
                        href="/en/about-us/statements-and-policies/privacy-statement"
                        className="h-color--white"
                      >
                        Privacy Policy
                      </a>
                      .
                      <input
                        type="hidden"
                        name="fxb.50e616a4-6a71-48e9-acac-20800324ad8a.Fields[92a2ad27-aecd-43d5-971e-77ba9c3fc08a].Value"
                        value="false"
                      />
                      <label
                        htmlFor="fxb_50e616a4-6a71-48e9-acac-20800324ad8a_Fields_92a2ad27-aecd-43d5-971e-77ba9c3fc08a__Value"
                        className="custom-control-label"
                      ></label>
                      <span
                        data-valmsg-for="fxb.50e616a4-6a71-48e9-acac-20800324ad8a.Fields[92a2ad27-aecd-43d5-971e-77ba9c3fc08a].Value"
                        data-valmsg-replace="true"
                        className="field-validation-valid"
                      ></span>
                    </div>

                    {/* Submit Button */}
                    <input
                      value="Reserve"
                      type="submit"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.7bf433be-c7cb-435f-93d9-54dfc0a30a68"
                      disabled
                    />
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_NavigationButtons"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.NavigationButtons"
                      type="hidden"
                      value="7bf433be-c7cb-435f-93d9-54dfc0a30a68"
                    />
                    <input
                      id="fxb_36152ce9-7501-48d0-bd9d-9b1b144c1837_7bf433be-c7cb-435f-93d9-54dfc0a30a68"
                      name="fxb.36152ce9-7501-48d0-bd9d-9b1b144c1837.7bf433be-c7cb-435f-93d9-54dfc0a30a68"
                      type="hidden"
                      value="1"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationSignup;
