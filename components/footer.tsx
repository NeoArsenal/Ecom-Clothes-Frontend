import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    {
        id:1,
        name: "Sobre nosotros",
        link: "#"
    },
    {
        id:2,
        name: "Contacto",
        link: "#"

    },
    {
        id:3,
        name: "Carreras",
        link: "#"
    },
    {
        id:4,
        name: "Prensa",
        link: "#"
    }
]

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:felx sm:items-center sm:justify-between">
                    <p>
                        <span className="font-bold">
                            AlonsoDev
                        </span>
                        E-commerce
                    </p>
                    <ul className = "flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} className="hover:underline me-4 md:me-6">
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                <span>
                    © 2024 <span className="font-bold">AlonsoDev</span>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
export default Footer;