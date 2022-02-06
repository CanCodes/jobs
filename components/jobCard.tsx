/* eslint-disable @next/next/no-img-element */

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export interface Company {
  name: string;
  color?: string;
  bgColor: string;
  icon: IconProp;
  country: string;
}

interface JobCardProps {
  company: Company;
  title: string;
  timeAndType: string;
}

export function JobCard({ company, title, timeAndType }: JobCardProps) {
  let [status, setStatus] = useState<boolean>(false);
  function openModal() {
    setStatus(true);
  }
  return (
    <div
      className="relative flex flex-col p-5 transition-colors bg-white rounded-md dark:bg-indigo-700"
      onClick={openModal}
    >
      {/* <img src="/twitter_social.png" alt="twitter" className="" />  */}
      <div
        style={{
          backgroundColor: company.bgColor,
        }}
        className={`absolute flex items-center justify-center w-16 h-16 rounded-2xl ring-white transition-colors dark:ring-indigo-700 ring-4 -top-8`}
      >
        <FontAwesomeIcon color={company.color} icon={company.icon} size="2x" />
      </div>
      <span className="mt-4 text-sm text-indigo-500 dark:text-white">
        {timeAndType}
      </span>
      <h1 className="text-2xl font-medium text-indigo-700 dark:text-white">
        {title}
      </h1>
      <p className="text-lg text-indigo-600 dark:text-white">
        at {company.name}
      </p>
      <p className="mt-10 font-medium text-indigo-600 dark:text-white">
        {company.country}
      </p>
      {status && (
        <div className="fixed top-0 left-0 z-10 flex w-full h-full bg-black/40">
          <div className="relative flex flex-col self-center w-1/2 p-5 mx-auto space-y-4 bg-white rounded-lg dark:bg-indigo-900 h-1/2">
            <button
              className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-tr-lg"
              onClick={(e) => {
                e.stopPropagation();
                setStatus(false);
              }}
            >
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                className="text-indigo-900 dark:text-white"
              ></FontAwesomeIcon>
            </button>
            <section id="top" className="flex space-x-5">
              <div
                style={{
                  backgroundColor: company.bgColor,
                }}
                className={`flex items-center justify-center w-24 h-24 rounded-lg ring-white dark:ring-indigo-700 ring-4 -top-12`}
              >
                <FontAwesomeIcon
                  color={company.color}
                  icon={company.icon}
                  size="3x"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-medium text-indigo-700 dark:text-white">
                  {title}
                </h1>
                <p className="text-xl text-indigo-600 dark:text-white">
                  at {company.name}
                </p>
              </div>
            </section>
            <section>
              <h1 className="text-2xl font-medium text-indigo-700 dark:text-white">
                Pozisyon Hakkında
              </h1>
              <p className="text-indigo-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                cum nam neque? Enim earum quos expedita asperiores dolores
                officiis modi magni aperiam! Ex amet aliquid possimus culpa
                reiciendis provident soluta!
              </p>
              <h1 className="mt-3 text-2xl font-medium text-indigo-700 dark:text-white">
                Beklentiler
              </h1>
              <p className="text-indigo-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                cum nam neque? Enim earum quos expedita asperiores dolores
                officiis modi magni aperiam! Ex amet aliquid possimus culpa
                reiciendis provident soluta!
              </p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
