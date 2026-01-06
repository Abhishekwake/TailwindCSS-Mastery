import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div
      className="relative h-screen 
      [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]"
    >
      {/* Decorative edge lines */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-5xl z-0">
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
      </div>

      {/* Actual content */}
      <Container className="relative z-10">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto p-4">
          <Image
            src="/banner.webp"
            alt="Banner"
            width={1000}
            height={400}
            className="rounded-2xl mx-auto w-full object-cover object-left-top border border-neutral-200 shadow-lg 
            mask-b-from-20% to 40%"
          />
        </div>
      </div>
    </div>
  );
}



