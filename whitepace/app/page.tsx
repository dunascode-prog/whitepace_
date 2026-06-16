import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="section_1 z-500 fixed top-0 right-0 left-0 flex flex-row max-w-auto max-h-screen px-40 py-3 bg-primary_1 justify-between items-center">
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
      <div className="section_6 px-40 flex flex-col items-center">
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
      <div className="section_8 relative overflow-hidden bg-primary_1 text-secondary_3 w-auto h-auto px-40 mt-20 py-30 ">
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
              so you&apos;ll always have access to them. Uses End-To-End
              Encryption (E2EE) to secure your notes and ensure no-one but
              yourself can access them.
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
      <div className="relative section-10 flex flex-col gap-3.5 justify-between items-center px-40 py-30">
        <div className="text-h2 z-10000">Our sponsors</div>
        <div className="absolute z-100 top-20 left-130 min-w-20 min-h-10 ">
          <Image
            src="/Text-block.svg"
            alt="Analytics dashboard"
            width={624}
            height={174}
            priority
            className="w-full max-w-187 h-auto"
          />
        </div>
        <div className="sponsor-container flex flex-row gap-30 justify-between items-center">
          <div className="">
            <Image
              src="/Apple.svg"
              alt="Analytics dashboard"
              width={55.47}
              height={68}
              priority
              className="w-full max-w-8 h-auto"
            />
          </div>
          <div className="">
            <Image
              src="/Microsoft.svg"
              alt="Analytics dashboard"
              width={287}
              height={62}
              priority
              className="w-full max-w-37 h-auto"
            />
          </div>
          <div className="">
            <Image
              src="/Slack.svg"
              alt="Analytics dashboard"
              width={280}
              height={71}
              priority
              className="w-full max-w-37 h-auto"
            />
          </div>
          <div className="">
            <Image
              src="/Google.svg"
              alt="Analytics dashboard"
              width={211}
              height={69.81}
              priority
              className="w-full max-w-37 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="section_11 bg-primary_1 text-secondary_3 ">
        <div className="relative flex flex-row gap-15 justify-between w-auto h-auto px-40 py-10 ">
          <div className="image min-w-110">
            <Image
              src="/Apps.svg"
              alt="Analytics dashboard"
              width={624}
              height={376}
              priority
              className="w-full max-w-190 h-auto"
            />
          </div>
          <div className="flex flex-col justify-center gap-3.5">
            <div className="text-h2 z-100">
              Work with Your Favorite Apps Using whitepace
            </div>
            <div className="text-p2-regular">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5  bg-primary_2 rounded py-2.5 px-4.5">
                <div>Read More</div>
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

      <div className="section-12 flex flex-col justify-between gap-15 items-center px-40 py-15">
        <div className="text-h2">What Our Clients Says</div>
        <div className="card-container2 flex flex-row justify-between gap-5">
          <div className="card1-1 shadow-custom-offset rounded-sm flex flex-col justify-between gap-8 px-10 py-15">
            <div className="flex flex-col justify-between gap-6 border-b pb-5">
              <div>
                <Image
                  src="/Quote.svg"
                  alt="quote"
                  width={86}
                  height={61.46}
                  className="w-full max-w-10 h-auto"
                />
              </div>

              <div className="text-p2-medium">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </div>
            </div>
            <div className="flex flex-row justify-beween gap-5">
              <div>
                <Image
                  src="/Avater.svg"
                  alt="quote"
                  width={86}
                  height={61.46}
                  className="w-full max-w-12 h-auto"
                />
              </div>
              <div>
                <div className="text-p2-medium-e">Oberon Shaw, MCH</div>
                <div className="text-p3-regular">
                  Head of Talent Acquisition, North America
                </div>
              </div>
            </div>
          </div>
          <div className="card1-2 bg-primary_2 text-secondary_3 shadow-custom-offset rounded-sm flex flex-col justify-between gap-8 px-10 py-15">
            <div className="flex flex-col justify-between gap-5 border-b pb-6">
              <div>
                <Image
                  src="/Quote1.svg"
                  alt="quote"
                  width={86}
                  height={61.46}
                  className="w-full max-w-10 h-auto"
                />
              </div>

              <div className="text-p2-medium">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </div>
            </div>
            <div className="flex flex-row justify-beween gap-5">
              <div>
                <Image
                  src="/Avater2.svg"
                  alt="quote"
                  width={86}
                  height={61.46}
                  className="w-full max-w-12 h-auto"
                />
              </div>
              <div>
                <div className="text-p2-medium-e text-primary_1">
                  Oberon Shaw, MCH
                </div>
                <div className="text-p3-regular">
                  Head of Talent Acquisition, North America
                </div>
              </div>
            </div>
          </div>
          <div className="card1-3 bg-primary_2 text-secondary_3  shadow-custom-offset rounded-sm flex flex-col justify-between gap-8 px-10 py-15">
            <div className="flex flex-col justify-between gap-5 border-b pb-6">
              <div>
                <Image
                  src="/Quote1.svg"
                  alt="quote"
                  width={86}
                  height={61.46}
                  className="w-full max-w-10 h-auto"
                />
              </div>

              <div className="text-p2-medium">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </div>
            </div>
            <div className="flex flex-row justify-beween gap-5">
              <div>
                <Image
                  src="/Avater3.svg"
                  alt="quote"
                  width={86}
                  height={61.46}
                  className="w-full max-w-12 h-auto"
                />
              </div>
              <div>
                <div className="text-p2-medium-e text-primary_1">
                  Oberon Shaw, MCH
                </div>
                <div className="text-p3-regular">
                  Head of Talent Acquisition, North America
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary_1 flex flex-col items-center gap-15 text-secondary_3 px-40 pt-30">
        <div className="flex flex-col items-center gap-5">
          <div className="text-h4">Try Whitepace today</div>
          <div className="text-p1-regular">
            Get started for free. Add your whole team as your needs grow.
          </div>
          <div className="">
            <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
              <div>Try Taskey free</div>
              <img
                src="./icon.png"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
            </button>
          </div>
          <div className="text-p1-regular">On a big team? Contact sales</div>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <Image
                src="/apple-black-logo 2.svg"
                alt="Analytics dashboard"
                width={55.47}
                height={68}
                priority
                className="w-full max-w-8 h-auto"
              />
            </div>
            <div className="">
              <Image
                src="/windows-logo 1.svg"
                alt="Analytics dashboard"
                width={55.47}
                height={68}
                priority
                className="w-full max-w-8 h-auto"
              />
            </div>
            <div className="">
              <Image
                src="/Group.svg"
                alt="Analytics dashboard"
                width={55.47}
                height={68}
                priority
                className="w-full max-w-8 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-30 py-10">
          <div className="flex flex-col items-left gap-2">
            <div className="min-w-36 min-h-1">
              <Image
                src="/logo.svg"
                alt="logo"
                width={45}
                height={6}
                className="w-full max-w-38 h-auto"
              />
            </div>
            <div className="text-p2-regular">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </div>
          </div>
          <div className="flex flex-col items-left gap-1">
            <div className="text-p2-bold">Products</div>
            <div className="text-p2-medium">Overview</div>
            <div className="text-p2-medium">Pricing</div>
            <div className="text-p2-medium">Customer stories</div>
          </div>
          <div className="flex flex-col items-left gap-1">
            <div className="text-p2-bold">Resources</div>
            <div className="text-p2-medium">Blog</div>
            <div className="text-p2-medium">Guides & tutorial</div>
            <div className="text-p2-medium">Help center</div>
          </div>
          <div className="flex flex-col items-left gap-1">
            <div className="text-p2-bold">About us</div>
            <div className="text-p2-medium">Careers</div>
            <div className="text-p2-medium">Media kit</div>
            <div className="text-p2-medium">Customer stories</div>
          </div>
          <div className="flex flex-col items-left gap-3">
            <div className="text-h5">Try Whitepace today</div>
            <div className="text-p2-regular">
              Get started for free. Add your whole team as your needs grow.
            </div>
            <div className="">
              <button className="text-p2-regular flex flex-row items-center gap-1.5 text-secondary_3 bg-primary_2 rounded py-2.5 px-4.5">
                <div className="text-p2-regular">Start today</div>
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
    </div>
  );
}
