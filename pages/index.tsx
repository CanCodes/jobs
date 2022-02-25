/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { FaAmazon, FaApple, FaDiscord, FaFacebookF, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Header } from "../components/header";
import { Company, JobCard } from "../components/jobCard";

const companies: Company[] = [
  {
    name: "Discord",
    bgColor: "#5865F2",
    color: "#ffffff",
    icon: FaDiscord,
    country: "Japan",
  },
  {
    name: "Twitter",
    bgColor: "#1DA1F2",
    color: "#ffffff",
    icon: FaTwitter,
    country: "United Kingdom",
  },
  {
    name: "Facebook",
    bgColor: "#5865F2",
    color: "#ffffff",
    icon: FaFacebookF,
    country: "United States",
  },
  {
    name: "Twitch",
    bgColor: "#9146FF",
    color: "#ffffff",
    icon: FaTwitch,
    country: "United States",
  },
  {
    name: "Github",
    bgColor: "#000000",
    color: "#ffffff",
    icon: FaGithub,
    country: "United States",
  },
  {
    name: "Google",
    bgColor: "#0F9D58",
    color: "#ffffff",
    icon: FaGoogle,
    country: "United States",
  },
  {
    name: "Apple",
    bgColor: "#000000",
    color: "#ffffff",
    icon: FaApple,
    country: "United States",
  },
  {
    name: "Amazon",
    bgColor: "#FF9900",
    color: "#FFFFFF",
    icon: FaAmazon,
    country: "Turkey",
  },
  {
    name: "Youtube",
    bgColor: "#FF0000",
    color: "#FFFFFF",
    icon: FaYoutube,
    country: "Germany",
  },
];

const Home: NextPage = () => {
  return (
    <main className="min-h-screen space-y-10 transition-colors sm:space-y-20 bg-indigo-50 dark:bg-indigo-900">
      <section className="py-10 space-y-20 bg-indigo-700 h-1/2 bg-gradient-to-tr">
        <Header></Header>
        <section className="container flex flex-col items-center justify-between mx-auto text-white sm:mt-10 sm:flex-row">
          <div className="space-y-2 mobile-margin sm:w-1/2">
            <h1 className="text-3xl font-medium sm:text-5xl">
              Çevrenizde İşinize Uygun En Taze Yazılımcıları Bulun.
            </h1>
            <span className="text-2xl sm:text-3xl opacity-90">
              Fırından Yeni Çıkmışlar.
            </span>
          </div>
          {/* <Image src={sengineer} alt="test"></Image> */}
          <img
            src="/undraw_software_engineer_re_fyew-1.svg"
            alt="furnace"
            className="hidden w-4/12 sm:block"
          />
        </section>
      </section>
      <section className="container flex flex-col pb-10 mx-auto space-y-16">
        <h1 className="text-4xl text-indigo-600 dark:text-white sm:text-5xl mobile-margin">
          Açık Pozisyonlar
        </h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mobile-margin">
          {companies.map((c, i) => {
            return (
              <JobCard
                timeAndType={`${
                  Math.floor(Math.random() * 10) + 1
                } saat önce | Full Time`}
                key={i}
                title={`${
                  [
                    "Backend",
                    "Frontend",
                    "Senior Backend",
                    "Senior Frontend",
                    "Senior Mobile",
                    "Mobile",
                  ][Math.floor(Math.random() * 6)]
                } 
        Developer`}
                company={c}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
