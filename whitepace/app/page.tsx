import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="section_1 z-500 fixed top-0 right-0 left-0 flex flex-row max-w-auto max-h-screen px-40 py-2 bg-primary_1 justify-between items-center">
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
      <div className="section_2 relative flex flex-col justify-center overflow-hidden top-0 h-screen max-w-auto max-h-screen">
        <img
          src="./Hero-section.png"
          alt="logo"
          className="absolute -z-10 w-full h-full object-cover inset-0"
        />
        <div className="px-40 py-26 text-p2-regular text-secondary_3 flex flex-row justify-between">
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
      <div className="section-3 relative z-40 flex flex-col py-10">
        <div className="absolute z-20 top-30 left-0 min-w-20 min-h-10">
          <Image
            src="/BACKGROUND.png"
            alt="Analytics dashboard"
            width={624}
            height={174}
            priority
            className="w-full max-w-187 h-auto"
          />
        </div>
        <div className="relative flex flex-row justify-between bg-secondary_3 text-secondary_4 w-auto h-auto px-40 pt-20 ">
          <div className="flex flex-col justify-center gap-3.5">
            <div className="text-h2 z-40">Project Management</div>
            <div className="absolute z-30 top-42 left-40 min-w-20 min-h-10">
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
            <div className="z-1000">
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
      <div className="section_4 bg-primary_1 text-secondary_3 ">
        <div className="relative flex flex-row justify-between w-auto h-auto px-40 py-10 ">
          <div className="flex flex-col justify-center gap-3.5">
            <div className="text-h2 z-100">Use as Extension</div>
            <div className="absolute z-50 top-25 left-40 min-w-20 min-h-10">
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
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5  bg-primary_2 rounded py-2.5 px-4.5">
                <div>Let&apos;s Go</div>
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
      <div className="section-5">
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
            <div className="text-h2 z-100">Customise it to your needs</div>
            <div className="absolute z-50 top-18 left-30 min-w-24 min-h-12">
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
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
                <div>Let&apos;s Go</div>
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
      <div className="section_6 px-40">
        <div className="relative flex flex-col items-center">
          <div className="absolute z-50 -top-9 left-80 min-w-24 min-h-12">
            <Image
              src="/Text-block.svg"
              alt="Analytics dashboard"
              width={624}
              height={174}
              priority
              className="w-full max-w-187 h-auto"
            />
          </div>
          <div className="text-h2 z-100">Choose Your Plan</div>
          <div className="text-p2-regular">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </div>
        </div>

        <div className="card-container max-h-[80%] flex flex-row justify-center py-10 gap-3.5">
          <div className="py-7">
            <div className="card1 border border-secondary_1 rounded py-10 px-11 flex flex-col justify-center gap-1.5 ">
              <div className="text-p1-bold">Free</div>
              <div className="text-h4">$0</div>
              <div className="text-p2-regular">
                Capture Ideas and Find them Quickly
              </div>
              <div className="flex flex-col justify-between gap-3.5">
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5.75 max-h-4.5"
                  />
                  <div className="text-p2-regular leading-tight">
                    Sync unlimited devices
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    10 GB monthly uploads
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    200 MB max. note size
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Capture Ideas and Find them Quickly
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight ">
                    Customize Home dashboard and access extra widgets
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Connect primary Google Calendar account
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Add due dates, reminders, and notifications to your tasks
                  </div>
                </div>
              </div>

              <div>
                <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_4 rounded border-1 border-secondary_1 py-2 px-8 mt-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="py-0">
            <div className="card2 border bg-primary_1 text-secondary_3 rounded py-10 px-11 h-full flex flex-col justify-center gap-1.5 ">
              <div className="text-p1-bold">Personal</div>
              <div className="text-h4 text-secondary_1">$11.99</div>
              <div className="text-p2-regular">
                Keep home and family on track
              </div>
              <div className="flex flex-col justify-between gap-3.5">
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Sync unlimited devices
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    10 GB monthly uploads
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    200 MB max. note size
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Capture Ideas and Find them Quickly
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Customize Home dashboard and access extra widgets
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Connect primary Google Calendar account
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon2.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Add due dates, reminders, and notifications to your tasks
                  </div>
                </div>
              </div>

              <div>
                <button className="text-p2-regular bg-primary_2 flex flex-row items-center gap-1.5 text-secondary_3 rounded py-2 px-8 mt-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="py-7">
            <div className="card3 border border-secondary_1 rounded py-10 px-11 flex flex-col justify-center gap-1.5 ">
              <div className="text-p1-bold">Organization</div>
              <div className="text-h4">$49.99</div>
              <div className="text-p2-regular leading-tight">
                Capture Ideas and Find them Quickly
              </div>
              <div className="flex flex-col justify-between gap-3.5">
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Sync unlimited devices
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    10 GB monthly uploads
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    200 MB max. note size
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Capture Ideas and Find them Quickly
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Customize Home dashboard and access extra widgets
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Connect primary Google Calendar account
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <img
                    src="./icon1.png"
                    alt="logo"
                    className="max-w-5 max-h-4"
                  />
                  <div className="text-p2-regular leading-tight">
                    Add due dates, reminders, and notifications to your tasks
                  </div>
                </div>
              </div>

              <div>
                <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_4 rounded border-1 border-secondary_1 py-2 px-8 mt-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_8 relative overflow-hidden flex flex-row justify-between bg-primary_1 text-secondary_3 w-auto h-auto px-40 mt-20 py-30 ">
        <div className="absolute z-20 top-10 left-0 min-w-20 min-h-10">
          <Image
            src="/BACKGROUND.png"
            alt="Analytics dashboard"
            width={624}
            height={174}
            priority
            className="w-full max-w-187 h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3.5">
          <div className="text-h2 z-50">Your work, everywhere you are</div>
          <div className="absolute z-100 top-25 left-200 min-w-20 min-h-10">
            <Image
              src="/Text-block.svg"
              alt="Analytics dashboard"
              width={624}
              height={174}
              priority
              className="w-full max-w-187 h-auto"
            />
          </div>
          <div className="text-p2-regular text-center">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </div>
          <div className="">
            <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
              <div>Try Taskey</div>
              <img
                src="./icon.png"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="section_9">
        <div className="relative flex flex-row justify-between bg-secondary_3 text-secondary_4 w-auto h-auto px-40 pt-20 ">
          <div className="flex flex-col justify-center gap-3.5">
            <div className="text-h2 z-40">100% your data</div>
            <div className="absolute z-30 top-22 left-40 min-w-20 min-h-10">
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
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </div>
            <div className="z-1000">
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
          <div className="min-w-140 min-h-78 image">
            <Image
              src="/Element.png"
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
