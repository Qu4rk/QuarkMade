/** Stay In The section with reveal animations and Base31 form button styling. */
export default function StayInTheSection() {
  return (
    <section className="block bg-primary">
      <div className="flex py-16 px-6 flex-col items-center gap-16 mx-auto w-full max-w-screen max-md:py-10 max-md:px-4 max-md:gap-12">
        <div data-reveal className="block [font-family:Denim,_serif] text-4xl font-semibold leading-[2.6875rem] tracking-[0.18px] text-center max-md:text-[1.75rem] max-md:leading-[2.125rem]" data-component="heading">
          <p className="block">
            {"Stay "}
            <br className="inline" />
            in the loop
          </p>
        </div>
        <div data-reveal className="w-full h-[3.0625rem] block relative max-w-150 overflow-hidden align-middle" title="Newsletter signup form">
          <div className="block text-color-001 [font-family:-apple-system,_'system-ui',_'Segoe_UI',_Roboto,_sans-serif] leading-4.5">
            <div className="block">
              <div className="box-content block">
                <form className="flex max-w-150 pb-px flex-1 bg-clr-0 [background-position:0px_50%] bg-no-repeat" aria-live="polite">
                  <div className="box-content w-full h-12 min-h-8 flex min-w-0 flex-col justify-center">
                    <div className="box-content flex relative min-w-0 items-stretch">
                      <div className="box-content w-[252.7px] flex relative min-w-0 py-2 justify-start grow shrink-0 basis-0 bg-primary max-md:w-[7.7625rem]">
                        <div className="box-content flex min-w-0 flex-col self-end grow">
                          <label className="box-content w-px h-px block absolute top-2 left-0 min-w-0 -m-px overflow-hidden [font-family:Denim,_Arial,_'Helvetica_Neue',_Helvetica,_sans-serif] font-bold text-left whitespace-nowrap text-nowrap" htmlFor="f0-first_name_01KCKRFQT54PXHW5XNFEW9DHW6" id="f0-label-first_name_01KCKRFQT54PXHW5XNFEW9DHW6">
                            First Name
                          </label>
                          <input className="w-full h-8 border border-solid border-clr-4 block min-w-0 pl-4 overflow-clip text-foreground [font-family:Denim,_Arial,_'Helvetica_Neue',_Helvetica,_sans-serif] font-medium text-left bg-primary focus:outline-none" data-ditto-id="style-f0-first-name-01kckrfqt54pxhw5xnfew9dhw6" data-component="input" aria-invalid="false" id="f0-first_name_01KCKRFQT54PXHW5XNFEW9DHW6" placeholder="First name" type="text" />
                          <div className="box-content block relative min-w-0" />
                        </div>
                      </div>
                      <div className="box-content w-[252.7px] flex relative min-w-0 py-2 justify-start grow shrink-0 basis-0 bg-primary max-md:w-[7.7625rem]">
                        <div className="box-content flex min-w-0 flex-col self-end grow">
                          <label className="box-content w-px h-px block absolute min-w-0 -m-px overflow-hidden [font-family:Denim,_Arial,_'Helvetica_Neue',_Helvetica,_sans-serif] font-bold text-left whitespace-nowrap text-nowrap" htmlFor="f0-email_01KCKRFQT9JP6XGNJY3FQM6MAJ" id="f0-label-email_01KCKRFQT9JP6XGNJY3FQM6MAJ">
                            Email
                          </label>
                          <input className="w-full h-8 border border-solid border-clr-4 block min-w-0 pl-4 overflow-clip text-foreground [font-family:Denim,_Arial,_'Helvetica_Neue',_Helvetica,_sans-serif] font-medium text-left bg-primary focus:outline-none" data-ditto-id="style-f0-email-01kckrfqt9jp6xgnjy3fqm6maj" data-component="input" aria-invalid="false" aria-required="true" id="f0-email_01KCKRFQT9JP6XGNJY3FQM6MAJ" name="email" placeholder="Email address" type="email" />
                          <div className="box-content block relative min-w-0" />
                        </div>
                      </div>
                      <div className="box-content flex relative min-w-0 py-2 px-2.5 justify-start bg-primary">
                        <button className="btn-base btn-primary-dark h-8 px-4" data-component="button" type="button">
                          SIGN UP
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {" "}
            <div className="block" id="f0-dynamic-react-root" />
          </div>
        </div>
        <div data-reveal className="block max-w-150 mx-auto [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] text-center max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
          <p className="block">
            Follow along as Base31 continues to grow, with event announcements, stories, updates, and opportunities to get involved.
          </p>
        </div>
      </div>
    </section>
  );
}
