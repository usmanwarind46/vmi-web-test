import Link from "next/link";
import React from "react";

export default function RelishRestaurant() {
  return (
    <main className="relative text-white  overflow-hidden z-10">
      <section>
        <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 single-portfolio-inner-responsive-spacing">
          <div className="portfolio-banner-shadow"></div>
          <div className="portfolio-banner-shadow-right"></div>
        </div>

        <div className="w-6xl mx-auto max-container-width">
          <div className="porfolio-back-icon">
            <Link
              href="/development-portfolio"
              className="flex text-[18px] poppins-font items-center"
            >
              <span className="me-2">
                <img src="/back-icon.svg" />
              </span>
              Back
            </Link>
          </div>

          <div className="single-portfolio-wrapper flex mt-5 gap-9 mb-30">
            <div className="single-portfolio-left">
              <img src="/relish-restaurant.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Web Design & Development
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Relish Restaurant
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Relish Restaurant</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope:{" "}
                  <span className="font-bold">
                    Website Design and Development
                  </span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Country: <span className="font-bold">KSA</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Brief</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  Relish Restaurant, a fine dining establishment based in Saudi
                  Arabia, approached us to create an elegant and inviting
                  website that captures the essence of their premium culinary
                  experience. The objective was to deliver a digital presence
                  that blends rich visuals with seamless functionality, making
                  it easy for customers to explore the menu, view the gallery,
                  and book a table.
                </p>
                <p className="poppins-font text-[16px]">
                  We crafted a luxurious and visually immersive design in Figma,
                  using dark tones, appetizing imagery, and refined typography.
                  The site was developed in WordPress to ensure easy updates,
                  mobile responsiveness, and smooth user navigation.
                </p>
                <p className="poppins-font text-[16px]">
                  From homepage storytelling to reservation flow and visual
                  consistency, every element was designed to reflect the
                  sophistication and quality of the Relish brand. The final
                  website offers a memorable online experience aligned with the
                  restaurant’s high end reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
