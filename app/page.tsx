import Image from "next/image";
import { Button } from "@/components/ui/button";

import Trust1 from "@/public/landing/HealthLine.png"
import Trust2 from "@/public/landing/FitTrack.webp"
import Trust3 from "@/public/landing/Medibase.png"
import Trust4 from "@/public/landing/Selfcare.png"

const Trusts = [Trust1, Trust2, Trust3, Trust4]

export default function Home() {
  return (
    <div className="w-fll h-full flex flex-col items-center gap-y-8">

      {/* Hero */}
      <div className="w-full h-[450px] mt-20 flex flex-col items-center justify-center gap-y-12">
        <div className="space-y-2 max-w-5xl">
          <h1 className="text-center text-3xl font-bold">Stay in Sync With Your Health — Every Day, Every Symptom</h1>
          <h3 className="text-center text-xl text-gray-600">Vitalsync empowers you to track symptoms, uncover health patterns, and take control of your well-being — all in one seamless app</h3>
        </div>
        <div className="flex gap-x-2">
          <Button className="rounded-full cursor-pointer">
            Start Free Today
          </Button>
          <Button className="rounded-full cursor-pointer" variant={"outline"}>
            Explore Features
          </Button>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Trusted by over 2,000+ daily users managing their health with confidence.</p>
        </div>
      </div>

      {/* Trust Building */}
      <div className="w-full flex items-center justify-between">
        {Trusts.map((trust, index) => (
          <Image key={index} src={trust} alt="Trust" width={100} height={100} />
        ))}
      </div>
    </div>
  );
}
