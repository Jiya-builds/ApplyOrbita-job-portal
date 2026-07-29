import Link from "next/link";

type ServiceCardProps = {
  icon: string;
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
    <Link href={href}>
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer h-full">

        <div className="text-5xl mb-5">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-[#0F2D6B]">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <p className="mt-6 font-semibold text-orange-500">
          Learn More →
        </p>

      </div>
    </Link>
  );
}