"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Article } from "./article";

const projects = [
	{
	
		href: "https://georgianliberty.com/",
		title:"Georgian Liberty web Platform",
		description: "Stand against illegal occupation",
	},
	{
	
		href: "https://windowproject.co",
		title:"Window Project",
		description: "website for a gallery",
	},
	{
	
		href: "https://trifectasports.ge",
		title:"Trifecta Sports Web platform",
		description: "website for a gallery",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
				{projects.map((s) => (
						<Article project={s}/>
					))}
				</div>
			</div>
		</div>
	);
}
