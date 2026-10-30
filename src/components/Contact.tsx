
import { useState } from "react";
import { type ChangeEvent, type FormEvent } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = ( 
    e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:jamesroben29@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello Nyi Nyi Aung,\n\n${message}\n\nBest regards,\n${name}\n${email}`
    )}`;

    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      value: "jamesroben29@gmail.com",
      link: "mailto:jamesroben29@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Malaysia",
      link: null,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/jamesroben29-coder",
      link: "https://github.com/jamesroben29-coder",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#080d19] px-6 py-24 text-white md:px-12 lg:px-20 scroll-mt-24 ..."
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Let's Work <span className="text-blue-500">Together</span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-blue-500"></div>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I'm always interested in new opportunities, exciting projects,
            and meaningful collaborations. Feel free to get in touch!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-5 text-2xl font-bold md:text-3xl">
                Let's Talk About Your Next Project
              </h3>

              <p className="mb-10 max-w-lg leading-8 text-gray-400">
                Whether you have a project idea, a job opportunity,
                or just want to connect, I'd love to hear from you.
                Let's create something great together!
              </p>

              {/* Contact Information */}
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 rounded-xl border border-gray-800 bg-[#0d1525] p-5 transition duration-300 hover:border-blue-500/60 hover:bg-[#111d33]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-500">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-sm text-gray-400">
                        {item.title}
                      </p>

                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("https") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="break-all font-semibold text-white transition hover:text-blue-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-white">
                          {item.value}
                        </p>
                      )}
                    </div>

                    {item.link && (
                      <FiArrowUpRight className="shrink-0 text-xl text-gray-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]"></span>
                <h4 className="font-bold text-white">
                  Open to Opportunities
                </h4>
              </div>

              <p className="text-sm leading-7 text-gray-400">
                Interested in remote internships, frontend development
                opportunities, and collaborative projects.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-gray-800 bg-[#0d1525] p-6 shadow-2xl md:p-9">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Send Me a Message
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Fill out the form below and I'll be happy to connect with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-[#080d19] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-[#080d19] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-[#080d19] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-gray-700 bg-[#080d19] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center cursor-pointer justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-20 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Have a great idea? Let's make it happen.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
