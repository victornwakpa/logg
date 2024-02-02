import Image from "next/image";
import Link from "next/link";
import blogs from "@/app/data/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
    return (
        <div className="container px-20 py-16">
            <div className="">
                <div className="grid grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="flex flex-col gap-4">
                            <Image src={blog.src} alt={blog.title} width={397} height={200} />
                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-gray-20">{blog.categories}</p>
                                <h4 className="font-bold text-xl">{blog.title}</h4>
                                <p className="text-neutral-black text-sm">{blog.desc}</p>
                                <Button variant={"link"} className="text-primary-20 text-left w-fit px-0">
                                    Read more
                                    <ArrowRight />
                                </Button>
                                <span className="text-sm text-gray-20">18th Jun, 2023</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link href={"/"}>
                        <Button className="bg-primary-20 text-left w-fit px-8">
                            Checkout Our Blog
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}