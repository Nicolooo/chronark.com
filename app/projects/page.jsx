"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Article } from "./article";

const projects = [
	{
	
		href: "https://georgianliberty.com/",
		title:"Georgian Liberty",
		description: "Stand against illegal occupation",
		statuss: "Co-founder of Georgian Liberty",
	},
	{
	
		href: "/",
		title:"Foodr.",
		description: "recipe platform",
		statuss: "Co-founder,CTO",
	},
	{
	
		href: "/",
		title:"Prisma",
		description: "Freelancing Platform",
		statuss: "Co-founder,CTO",
	},
	{
	
		href: "/",
		title:"Asper Designs",
		description: "Digital Agency",
		statuss: "Co-founder,CTO",
	},
	{
	
		href: "https://www.instagram.com/selektor.tbilisi/",
		title:"Selektor",
		description: "Techno Label",
		statuss: "Co-founder,CEO, Creative director",
	},
	{
		href: "/",
		title:"Tsamo",
		description: "Coming soon.",
		statuss: "Co-founder, CEO",
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
