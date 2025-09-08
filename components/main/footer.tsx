"use client";

import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                const isMailTo = link.startsWith("mailto:");

                return isMailTo ? (
                  <a
                    key={`${column.title}-${name}`}
                    href={link}
                    className="flex flex-row items-center my-[10px] hover:text-blue-400 transition-colors"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </a>
                ) : (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center my-[10px] hover:text-blue-400 transition-colors"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] mt-[20px] text-[15px] text-center">
          &copy; Indrayudh Saha {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
