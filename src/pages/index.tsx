import Head from "next/head";
import Image from "next/image";
import { LinkButton } from "@/components/button";
import env from "@/share/env";

export default function Home() {
  return (
    <>
      <Head>
        <title>{env.websiteTitle}</title>
      </Head>
      <main className="w-screen h-screen flex flex-col justify-center lg:justify-end">
        <div className="flex flex-col lg:flex-row justify-between items-center py-14 lg:py-0 lg:pb-10 lg:px-12 h-screen lg:h-40 text-white text-2xl">
          <div className="rounded-full overflow-hidden w-40 h-40 relative">
            <Image fill={true} src={"/avatar.webp"} alt={"avatar"} />
          </div>
          <LinkButton text="Memos" url={env.url.memos} />
          <LinkButton text="Blog" url={env.url.blog} />
          <LinkButton text="Projects" url={env.url.projects} />
          <LinkButton text="About" url={env.url.about} />
        </div>
      </main>
    </>
  );
}
