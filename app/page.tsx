import LinkCard from "@/components/LinkCard";
import { bio, links } from "@/lib/links";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[480px] px-5 pt-20 sm:pt-[120px] pb-16">
      <header className="mb-10">
        <h1 className="text-[20px] font-semibold text-neutral-100">
          {bio.name}
        </h1>
        <p className="mt-1 text-[15px] text-neutral-400 leading-snug">
          {bio.tagline}
        </p>
      </header>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
    </main>
  );
}
