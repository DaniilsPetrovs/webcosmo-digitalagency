import { Tab } from "./UI/Tab";
import Image from "next/image";
import arrow from "../assets/small-arrow.svg";
import helix from "../assets/helix.png";
import { Ok } from "./UI/Ok";

import { useLang } from "../context/LangContext";
import languages from "../data/lang/index";

export default function Solutions() {
    // Inside component
    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].solutions;
    return (
        <section
            id="solutions"
            className="rounded-b-xl rounded-tl-xl bg-[#EFF1F5] "
        >
            <div className="relative mask-side-file-top graident-main3 py-30 xl:py-40 rounded-xl overflow-hidden">
                <div
                    style={{ translate: "0% -80%" }}
                    className="z-40 absolute md:!-translate-y-0 top-[800px] md:top-30 -right-20 md:-right-25 lg:-right-35 2xl:-right-25 w-[250px] md:w-[350px] lg:w-[420px]"
                >
                    <Image src={helix} alt="helix" />
                </div>

                <div className="container mx-auto">
                    <Tab name={tr.tab} />

                    <h2 className="z-50 relative mt-8 lg:mt-16 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tex-left">
                        {tr.title}
                    </h2>

                    <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {tr.blocks.map((block: any, idx: number) => (
                            <div
                                key={idx}
                                className="solution mask-side-notches"
                            >
                                <p className="text-lg md:text-2xl font-semibold ">
                                    {block.title}
                                </p>
                                <div
                                    className="mt-6 2x:mt-8 bg-white w-full opacity-20"
                                    style={{ height: "1px" }}
                                ></div>

                                <ul className="mt-4 2xl:mt-6 flex flex-col gap-2">
                                    {block.items.map(
                                        (item: string, index: number) => (
                                            <li
                                                key={index}
                                                className="flex gap-2"
                                            >
                                                <Ok />
                                                <p>{item}</p>
                                            </li>
                                        )
                                    )}
                                </ul>

                                <div className="mt-8 2xl:mt-10 flex justify-end">
                                    <a href="#cta" className="btn btn-transparent btn-arrow w-full justify-center md:w-fit !py-1 !pl-6 !pr-1.5 ">
                                        <p className="mx-auto md:mx-0">{tr.more}</p>
                                        <span>
                                            <Image src={arrow} alt="arrow" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
