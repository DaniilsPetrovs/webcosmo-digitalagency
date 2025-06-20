"use client";
import Header from "./components/Header";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Examples from "./components/Examples";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import { CTA } from "./components/Cta";
import FAQSection from "./components/FAQSection";
import Articles from "./components/UsefullArticles";
import Footer from "./components/Footer";
import { useLang } from "./context/LangContext";
import languages from "./data/lang/index";

export default function Home() {
    const { lang } = useLang();
    // @ts-ignore
    const tr = languages[lang].cta;
    return (
        <>
            <main className="main overflow-hidden" id="main">
                <div className="xl:p-4 md:bg-white rounded-2xl">
                    <Header />
                </div>
                <div className="relative bg-[#EFF1F5] rounded-xl z-20">
                    <Features />
                    <Solutions />
                    <Examples />
                    <Reviews />
                </div>
            </main>

            <div className=" z-10" style={{ marginTop: "-260px" }}>
                <Team />
            </div>

            <main
                className="px-5 bg-[#e6e9ee] z-10 overflow-hidden"
                style={{ marginTop: "-260px" }}
            >
                <div className="relative">
                    <CTA
                        title={
                            `<p><span>${tr.titleBlue}</span> <br /> ${tr.titleBlack}</p>`
                        }
                    />
                </div>

                <div className=" bg-[#eff1f5] rounded-b-2xl relative">
                    <FAQSection />
                    <Articles />
                </div>

                <div className="mt-8 pb-4">
                    <Footer />
                </div>
            </main>
        </>
    );
}
