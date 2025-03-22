import React from 'react'
import './contactUs.css'

function ContactUs() {
  return (
  <section class="relative overflow-hidden bg-[#1E1E1E] py-20 lg:py-[20px]">

    <h2 class="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white text-center">
      Contact <span class="text-[#4FB777]">Us</span>
    </h2>

    <div class="container mx-auto">
      
      <div class="flex flex-wrap lg:justify-between">

        <div class="w-full px-4 lg:w-1/2 xl:w-6/12 flex items-center justify-center">
          <h6 class="hidden sm:flex items-center justify-center font-semibold uppercase md:justify-center">
            <img src="/contactus.png" alt="Icon" className="mr-3 h-[400px] w-[400px]" />
          </h6>
        </div>


        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">

          <div class="relative bg-none p-8 sm:p-12 dark:bg-dark-2">

            <form>

              <div class="mb-6">
                <input type="text" placeholder="Your Name"
                  class="w-full resize-none rounded-sm border-none bg-[#18181C] px-[14px] py-3 text-base text-white-100 placeholder-white/[50%] outline-none"/>
              </div>

              <div class="mb-6">
                <input type="email" placeholder="Your Email"
                  class="w-full resize-none rounded-sm border-none bg-[#18181C] px-[14px] py-3 text-base text-white placeholder-white/[50%] outline-none" />
              </div>

              <div class="mb-6">
                <textarea rows="6" placeholder="Your Message"
                  class="w-full resize-none rounded-sm border-none bg-[#18181C] px-[14px] py-3 text-base text-white placeholder-white/[50%] outline-none">
                </textarea>
              </div>

              <div>
                <button type="submit"
                  class="w-full rounded-sm border-none bg-[#4FB777] p-3 text-[#18181C] font-medium transition hover:bg-primary/90">
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs
