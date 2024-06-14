import Navbar from "@/components/global/Navbar";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react"
import Link from "next/link";
import BoxReveal from "@/components/ui/box-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import WordPullUp from "@/components/ui/words-pullup";
import RadialGradient from "@/components/global/radical-gradient";
import GridPattern from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import PartnersLogo from "@/components/global/PartnersLogo";
export default async function Home() {
  return (
    <main className="flex items-center justify-center overflow-hidden flex-col gap-10 md:mx-28">
      <Navbar />
      <GridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <section className="h-auto w-full md:py-10 py-3 flex flex-col justify-center items-center md:gap-7 gap-3 mx-10">
        <RadialGradient className="-z-10" size={500} />
        <span className="inline-flex rounded-[64px] border text-center font-light transition-all duration-300 ease-in-out h-7 px-3 py-1 text-sm leading-tight border-[#222238] bg-[##1e1b4b]/35 text-violet-50">Join Our Discord Server! </span>

        <h2 className="text-center md:text-5xl text-2xl font-bold md:w-4/5">
          Fastest Growing Community for Developers to<WordPullUp
            className="inline-block text-center md:text-5xl text-2xl font-bold ml-3"
            words="Connect"
          />
          ,{""}
          <WordPullUp
            className="inline-block text-center md:text-5xl text-2xl font-bold ml-3"
            words="Learn"
          />and{" "}   <WordPullUp
            className="inline-block text-center md:text-5xl text-2xl font-bold ml-3"
            words="Develop"
          />Innovations Together
          <span className="text-[#222238]">.</span>

        </h2>
        <Link href="/workflows" className="flex overflow-hidden rounded-full">
          <AnimatedGradientText className="m-2">
            <span
              className={cn(
                `animate-gradient flex md:text-xl text-xm bg-gradient-to-r from-[#ffaa40] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent bg-background`
              )}
            >
              🎉
              <hr className="mx-2 h-6 justify-center items-center flex w-[1px] shrink-0 bg-muted-foreground" />
              {" "}
              Start Blogging
            </span>
            <ChevronRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
        <div className="w-full h-auto md:py-10 py-4 md:px-3 px-2 md:gap-8 gap-5 border border-[#323232]/50 rounded-xl flex md:flex-row flex-col justify-center items-center bg-black/20 backdrop-blur-2xl z-10">
          <div className="flex flex-col justify-center items-center md:w-1/4">
            <div className="flex gap-2 justify-center items-end text-center">
              <p className="text-foreground text-xs text-center">Estimated.</p>
              <NumberTicker value={2500} className="md:text-4xl text-xl" />  Developers
            </div>
            <p className="text-muted-foreground text-sm text-center">
              growing everyday rapidly </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/4">
            <div className="flex gap-2 justify-center items-end text-center">
              <p className="text-foreground text-xs text-center">Partnered</p>
              <NumberTicker value={25} className="md:text-4xl text-xl" /> Communities
            </div>
            <p className="text-muted-foreground text-sm text-center">
              partnered to reach more students
            </p>
          </div>
          <BoxReveal className="flex flex-col justify-center items-center md:w-2/4 text-center md:text-start md:text-2xl text-lg text-foreground/90">
            <p>
              We help our community <span className="underline font-bold">developers</span>,
              <br />
              to make innovative product <span className="underline font-bold">with code.</span>
            </p>
          </BoxReveal>
          <BorderBeam />
        </div>
        <div className="partners">
          <h2 className="text-4xl font-semibold  pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center  text-transparent from-white to-[#1a192a]/10">Our Community Partners</h2>
          <PartnersLogo></PartnersLogo>
        </div>

    
      </section>




    </main>
  );
}
