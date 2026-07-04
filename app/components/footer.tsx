import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plum text-paper px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-3xl uppercase mb-3">TINT.</p>
          <p className="font-body text-paper/70 text-sm max-w-[24ch]">
            A color studio for people who don&apos;t do bland.
          </p>
        </div>
        <div>
          <p className="font-mono uppercase text-xs tracking-widest text-citrus mb-3">
            Visit
          </p>
          <p className="font-body text-sm text-paper/85">
            412 Ferry Street
            <br />
            Unit 2B
            <br />
            Portland, OR
          </p>
        </div>
        <div>
          <p className="font-mono uppercase text-xs tracking-widest text-citrus mb-3">
            Hours
          </p>
          <p className="font-body text-sm text-paper/85">
            Tue–Fri · 10–7
            <br />
            Sat · 9–5
            <br />
            Sun–Mon · Closed
          </p>
        </div>
        <div>
          <p className="font-mono uppercase text-xs tracking-widest text-citrus mb-3">
            Follow
          </p>
          <p className="font-body text-sm text-paper/85">
            <Link href="#" className="hover:text-citrus transition-colors">
              Instagram
            </Link>
            <br />
            <Link href="#" className="hover:text-citrus transition-colors">
              TikTok
            </Link>
          </p>
        </div>
      </div>
      <p className="font-mono text-xs text-paper/50 mt-14 text-center">
        Est. 2019. Cutting bland since day one.
      </p>
    </footer>
  );
}
