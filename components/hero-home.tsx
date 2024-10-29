'use client';
import { useEffect, useState } from 'react';
// import VideoThumb from "@/public/images/banner-low.jpg";
// import ModalVideo from "@/components/modal-video";
import YouTube from 'react-youtube';
import { sendGTMEvent } from '@next/third-parties/google'

export default function HeroHome() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-4 text-center md:pb-8">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Where AI meets spreadsheets
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Boosts your efficiency with AI-driven insights and confident answers in Google Sheets™ and more.
              </p>
              <div className="mt-8 mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={800}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://cutt.ly/keSsK7yd" target="_blank"  rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'Install the Power Tools' })}>
                    Install the Power Tools
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={1000}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://doc.xcelsior.ai/"  target="_blank"  rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'Read the Docs' })} >
                    Read the Docs
                      <span className="ml-1 tracking-normal text-gray-300/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={600}
              >
              </p>
              <div className="relative mb-8">
              <YouTube
                videoId="coFvNmr6oUA"  // YouTube video ID
                opts={{
                  width: '100%',
                  height: '576px',
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                  },
                }}
                className="w-full h-full"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
