import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import AutomatedGif from "@/public/images/automated.gif";
import Acurrate from "@/public/images/accurate.png";

import Instant from "@/public/images/instant.png";
import Versatile from "@/public/images/versatile.png";

import Secure from "@/public/images/secure.webp";
import Diverse from "@/public/images/diverse.png";


export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-4 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-8">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Advanced Controls
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Transforms Your Work with XCelsior AI
            </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
            {/* Automated Workflows */}
            <div className="flex flex-col md:flex-row items-start md:items-start gap-8 w-full">
              <div className="flex-1 md:max-w-[50%]">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Automated Workflows
                </h3>
                <p className="text-indigo-200/65">
                  Automate tasks and create custom workflows, increasing productivity to 10x.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end md:max-w-[50%]">
                <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
                  <a style={{ display: 'inline-block', width: '100%', height: '100%' }} target="_blank" rel="noopener noreferrer" href="https://cutt.ly/ueSsSDHf">
                  <Image
                    src={AutomatedGif}
                    alt="Automated Workflows"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  </a>
                </div>
              </div>
            </div>
            {/* Accurate Answers */}
            <div className="flex flex-col md:flex-row items-start md:items-start gap-8 w-full">
              <div className="flex-1 md:max-w-[50%]">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Confident Answers
                </h3>
                <p className="text-indigo-200/65">
                  Our confidence checker reduces errors, saving hours every day.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end md:max-w-[50%]">
                <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
                <a style={{ display: 'inline-block', width: '100%', height: '100%' }} href="https://cutt.ly/IeSsGOOu" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={Acurrate}
                    alt="Accurate Answers"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  </a>
                </div>
              </div>
            </div>
            {/* Instant Insights */}
            <div className="flex flex-col md:flex-row items-start md:items-start gap-8 w-full">
              <div className="flex-1 md:max-w-[50%]">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Instant Insights
                </h3>
                <p className="text-indigo-200/65">
                  Analyze and summarize findings in seconds, and generate reports with one click.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end md:max-w-[50%]">
                <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
                <a style={{ display: 'inline-block', width: '100%', height: '100%' }} href="https://cutt.ly/GeSsHQtI" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={Instant}
                    alt="Instant Insights"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  </a>
                </div>
              </div>
            </div>
            {/* Versatile Data Handling */}
            <div className="flex flex-col md:flex-row items-start md:items-start gap-8 w-full">
              <div className="flex-1 md:max-w-[50%]">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Versatile Data Handling
                </h3>
                <p className="text-indigo-200/65">
                  Easily work with text files, PDFs, images, etc.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end md:max-w-[50%]">
                <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
                <a style={{ display: 'inline-block', width: '100%', height: '100%' }} href="https://app.xcelsior.ai/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={Versatile}
                    alt="Versatile Data Handling"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </a>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col md:flex-row items-start md:items-start gap-8 w-full">
              <div className="flex-1 md:max-w-[50%]">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Secure Data Encryption
                </h3>
                <p className="text-indigo-200/65">
                Encrypt files to keep your data private and not used for training.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end md:max-w-[50%]">
                <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src={Versatile}
                    alt="Versatile Data Handling"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="flex flex-col md:flex-row items-start md:items-start gap-8 w-full">
              <div className="flex-1 md:max-w-[50%]">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Diverse Prompts and Function
                </h3>
                <p className="text-indigo-200/65">
                Access a library of community-contributed tools for tasks like data analysis, summarization, and reporting.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end md:max-w-[50%]">
                <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src={Versatile}
                    alt="Versatile Data Handling"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
     
    </section>
  );
}
