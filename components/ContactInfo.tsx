import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    title: "Email Support",
    description: "applyorbita@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone Support",
    description: "+44 7577 011891",
    icon: Phone,
  },
  {
    title: "Working Hours",
    description: "Monday - Friday | 9:00 AM - 6:00 PM",
    icon: Clock,
  },
  {
    title: "Live Support",
    description: "Get quick assistance from our career experts",
    icon: MessageCircle,
  },
];

export default function ContactInfo() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[35px] bg-[#0F2D6B] p-10 lg:p-14 text-white">

          <div className="max-w-3xl">

            <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
              Contact Us
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Get In Touch With Our Team
            </h2>

            <p className="mt-6 text-blue-100 leading-8">
              Have questions about our services? Our experts are ready
              to guide you through your career journey.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {contactDetails.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">

                    <Icon
                      size={26}
                      className="text-white"
                    />

                  </div>


                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-blue-100">
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}