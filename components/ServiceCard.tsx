
import Link from "next/link";
import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  let href = "/services";

  switch (title) {
    case "Resume Building":
      href = "/services";
      break;

    case "Internships":
      href = "/careers";
      break;

    case "Job Matching":
      href = "/careers";
      break;

    case "Career Guidance":
      href = "/contact";
      break;

    default:
      href = "/services";
  }

  return (
    <Link href={href} className="block h-full">
      <div className="group h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-[#0F2D6B]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <p className="mt-6 font-semibold text-orange-500">
          Learn More →
        </p>
      </div>
    </Link>
  );
}
