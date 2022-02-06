/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Header } from "../components/header";
import { Company, JobCard } from "../components/jobCard";
import {
  faAmazon,
  faApple,
  faDiscord,
  faFacebookF,
  faGithub,
  faGoogle,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const companies: Company[] = [
  {
    name: "Discord",
    bgColor: "#5865F2",
    color: "#ffffff",
    icon: faDiscord,
    country: "Japan",
  },
  {
    name: "Twitter",
    bgColor: "#1DA1F2",
    color: "#ffffff",
    icon: faTwitter,
    country: "United Kingdom",
  },
  {
    name: "Facebook",
    bgColor: "#5865F2",
    color: "#ffffff",
    icon: faFacebookF,
    country: "United States",
  },
  {
    name: "Twitch",
    bgColor: "#9146FF",
    color: "#ffffff",
    icon: faTwitch,
    country: "United States",
  },
  {
    name: "Github",
    bgColor: "#000000",
    color: "#ffffff",
    icon: faGithub,
    country: "United States",
  },
  {
    name: "Google",
    bgColor: "#0F9D58",
    color: "#ffffff",
    icon: faGoogle,
    country: "United States",
  },
  {
    name: "Apple",
    bgColor: "#000000",
    color: "#ffffff",
    icon: faApple,
    country: "United States",
  },
  {
    name: "Amazon",
    bgColor: "#FF9900",
    color: "#FFFFFF",
    icon: faAmazon,
    country: "Turkey",
  },
  {
    name: "Youtube",
    bgColor: "#FF0000",
    color: "#FFFFFF",
    icon: faYoutube,
    country: "Germany",
  },
];

const Home: NextPage = () => {
  return (
    <main className="min-h-screen space-y-20 bg-indigo-50">
      <section className="py-10 h-1/2 bg-gradient-to-tr from-indigo-600 to-indigo-700">
        <Header></Header>
        <section className="container flex flex-col mx-auto mt-10 text-white sm:flex-row justify-evenly">
          <div className="w-1/2 space-y-2 mt-28">
            <h1 className="text-5xl font-medium">
              Çevrenizde İşinize Uygun En Taze Yazılımcıları Bulun.
            </h1>
            <h2 className="text-3xl">Fırından Taze Çıkmışlar.</h2>
          </div>
          {/* <Image src={sengineer} alt="test"></Image> */}
          <img
            src="/undraw_software_engineer_re_fyew-1.svg"
            alt="furnace"
            className="w-2/6"
          />
        </section>
      </section>
      <section className="container flex flex-col pb-10 mx-auto space-y-16">
        <h1 className="text-5xl text-indigo-600">Açık Pozisyonlar</h1>
        <div className="grid gap-12 sm:grid-cols-4">
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
