import Image, { StaticImageData } from "next/image";
import Link from "next/link";


export const ArticleSlide: React.FC<{
    title: string;
    imgUrl?: string | StaticImageData;
    tech?: string[];
    link: string
}> = ({ title, imgUrl, tech, link }) => {
    return (
        <div className="article-slide flex flex-col gap-4 w-full max-w-[490px] 2xl:max-w-[550px]">
            <div className="relative">
                <Link href={link}>
                <div className="pointer-events-none mask-review-slide rounded-xl graident-main min-h-[300px] md:min-h-[350px] xl:min-h-[420px]">
                    <Image
                        className={`absolute`}
                        src={imgUrl ? imgUrl : ""}
                        alt="image"
                    />
                </div>
                </Link>
                <Link href={link} className="absolute bottom-0 right-0 w-12 h-12 sm:w-14 sm:h-14 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 !rounded-xl btn btn-white aspect-square flex justify-center items-center">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.0001 2.6665L4.66675 7.99984L10.0001 13.3332L11.3334 11.9998L7.33341 7.99984L11.3334 3.99984L10.0001 2.6665Z"
                        />
                    </svg>
                </Link>
            </div>

            <p className="font-semibold text-xl">{title}</p>

            {tech ? (
                <div className="flex flex-wrap gap-2">
                    {tech?.map((tech, i) => (
                        <p
                            key={i}
                            className="py-2 px-2.5 rounded-sm bg-white text-[#1D2230]"
                        >
                            {tech}
                        </p>
                    ))}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
