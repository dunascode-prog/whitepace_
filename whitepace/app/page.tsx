import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="section_1 z-100 fixed top-0 right-0 left-0 flex flex-row max-w-auto max-h-screen px-40 py-2 bg-primary_1 justify-between items-center">
        <img src="./logo.svg" alt="logo" className="max-w-45 max-h-6" />
        <div className="text-p2-medium text-secondary_3 flex flex-row gap-4.5 justify-between items-center">
          <div className="flex flex-row gap-2 justify-between items-center">
            <div className="flex flex-row justify-between items-center">
              <div>Products</div>
              <img
                src="./Down Arrow.svg"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </div>

            <div className="flex flex-row justify-between items-center">
              <div>Solutions</div>
              <img
                src="./Down Arrow.svg"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </div>

            <div className="flex flex-row justify-between items-center">
              <div>Resources</div>
              <img
                src="./Down Arrow.svg"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </div>

            <div className="flex flex-row justify-between items-center">
              <div>Pricing</div>
              <img
                src="./Down Arrow.svg"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2.5 justify-between items-center">
            <button className="bg-secondary_1 text-primary_1 px-8.5 py-2.5 rounded">
              Login
            </button>
            <button className="flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
              <div>Try Whitepace Free</div>
              <img
                src="./icon.png"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="section_2 relative overflow-hidden top-12 h-screen max-w-auto max-h-screen">
        <img
          src="./Hero-section.png"
          alt="logo"
          className="absolute -z-10 w-full h-full object-cover inset-0"
        />
        <div className="px-40 py-26 text-p2-regular text-secondary_3 flex flex-row justify-between gap-2 align-center">
          <div className="flex flex-col gap-3.5 justify-center">
            <div className="text-h2">Get More Done with whitepace</div>
            <div>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </div>
            <div>
              <button className="flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
                <div>Try Whitepace Free</div>

                <img
                  src="./icon.png"
                  alt="logo"
                  className="max-w-5.75 max-h-4.5"
                />
              </button>
            </div>{" "}
          </div>

          <div className="flex align-center justify-center min-w-140 min-h-78">
            <Image
              src="/illustration1.png"
              alt="Analytics dashboard"
              width={624}
              height={376}
              priority
              className="w-full max-w-187 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="section_4 flex flex-col">
        <div className="relative flex flex-row justify-between bg-secondary_3 text-secondary_4 w-auto h-auto px-40 pt-20 ">
          <div className="flex flex-col justify-center gap-3.5">
            <div className="text-h2 z-100">Project Management</div>
            <div className="absolute z-50 top-42 left-40 min-w-20 min-h-10">
              <Image
                src="/Text-block.svg"
                alt="Analytics dashboard"
                width={624}
                height={174}
                priority
                className="w-full max-w-187 h-auto"
              />
            </div>
            <div className="text-p2-regular">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
                <div>Get Started</div>
                <img
                  src="./icon.png"
                  alt="logo"
                  className="max-w-5.75 max-h-4.5"
                />
              </button>
            </div>
          </div>
          <div className="min-w-150 min-h-88 image">
            <Image
              src="/illustration1.png"
              alt="Analytics dashboard"
              width={624}
              height={376}
              priority
              className="w-full max-w-187 h-auto"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-25 bg-secondary_3 text-secondary_4 w-auto h-auto px-40 py-20 ">
          <div className="image min-w-110 min-h-50">
            <Image
              src="/work_together.png"
              alt="Analytics dashboard"
              width={624}
              height={376}
              priority
              className="w-full max-w-187 h-auto"
            />
          </div>
          <div className="relative flex flex-col justify-center gap-3.5">
            <div className="text-h2 z-100">Work together</div>
            <div className="absolute z-50 top-28 left-30 min-w-24 min-h-12">
              <Image
                src="/Text-block.svg"
                alt="Analytics dashboard"
                width={624}
                height={174}
                priority
                className="w-full max-w-187 h-auto"
              />
            </div>

            <div className="text-p2-regular">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
                <div>Try It Now</div>
                <img
                  src="./icon.png"
                  alt="logo"
                  className="max-w-5.75 max-h-4.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section_5 bg-primary_1">
        <div className="flex flex-row justify-between text-secondary_4 w-auto h-auto px-40 py-10 ">
          <div className="flex flex-col justify-center gap-3.5">
            <div className="text-h2">Project Management</div>
            <div className="text-p2-regular">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
                <div>Get Started</div>
                <img
                  src="./icon.png"
                  alt="logo"
                  className="max-w-5.75 max-h-4.5"
                />
              </button>
            </div>
          </div>
          <div className="min-w-150 min-h-88 image">
            <Image
              src="/illustration1.png"
              alt="Analytics dashboard"
              width={624}
              height={376}
              priority
              className="w-full max-w-187 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
