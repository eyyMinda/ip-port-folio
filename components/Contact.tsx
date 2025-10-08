import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PageInfo } from "../typings";
import SectionDescription from "./ui/SectionDescription";

type Props = {
  dark: boolean;
  pageInfo: PageInfo;
};

export default function Contact({ dark, pageInfo }: Props) {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm("service_jshvqpd", "template_p4hn2il", e.currentTarget, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_ID
      })
      .then(
        result => {
          alert("You have successfully sent an email");
          e.currentTarget.reset(); // Only reset on success
        },
        error => {
          alert(
            "We have encountered an issue on our website." +
              "Click on an email link to redirect you to the mailing service."
          );
          console.log(error.text);
          // Don't reset form on error - user can try again
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section max-w-[2000px] xl:px-10">
      <h3 className="sectionHeading">Contact</h3>

      {/* Description */}
      <SectionDescription dark={dark}>
        Let&apos;s work together! I&apos;m always interested in new opportunities and exciting projects.
      </SectionDescription>

      {/* Contact Content */}
      <div className="px-4 mt-20 md:mt-24">
        <div className="mx-auto max-w-4xl">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ease-out group ${
              dark
                ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5"
                : "bg-gradient-to-br from-gray-100/90 to-gray-200/90 border-gray-300/50 hover:border-secondary-500/30 hover:shadow-xl hover:shadow-secondary-500/5"
            } md:rounded-3xl`}>
            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
              {/* Header */}
              <div className="mb-8 text-center">
                <h4
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}>
                  Feel free to <span className={`${dark ? "text-primary-400" : "text-secondary-500"}`}>Contact</span>{" "}
                  me!
                </h4>

                {/* Email Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    dark
                      ? "bg-gray-700/50 hover:bg-gray-600/50 text-primary-300 hover:text-primary-200"
                      : "bg-gray-200/50 hover:bg-gray-300/50 text-secondary-600 hover:text-secondary-700"
                  }`}
                  href={`mailto:${pageInfo.email}?subject=Message%20from%20a%20visitor&body=Hello%20from%20...`}>
                  <EnvelopeIcon className="w-5 h-5" />
                  <span className="text-lg font-medium">{pageInfo.email}</span>
                </motion.a>
              </div>

              {/* Contact Form */}
              <form onSubmit={sendEmail} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        dark
                          ? "placeholder-gray-400 text-white bg-gray-700/50 border-gray-600/50 focus:ring-primary-500/50 focus:border-primary-500/50"
                          : "placeholder-gray-500 text-gray-900 bg-gray-100/50 border-gray-300/50 focus:ring-secondary-500/50 focus:border-secondary-500/50"
                      }`}
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        dark
                          ? "placeholder-gray-400 text-white bg-gray-700/50 border-gray-600/50 focus:ring-primary-500/50 focus:border-primary-500/50"
                          : "placeholder-gray-500 text-gray-900 bg-gray-100/50 border-gray-300/50 focus:ring-secondary-500/50 focus:border-secondary-500/50"
                      }`}
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      dark
                        ? "placeholder-gray-400 text-white bg-gray-700/50 border-gray-600/50 focus:ring-primary-500/50 focus:border-primary-500/50"
                        : "placeholder-gray-500 text-gray-900 bg-gray-100/50 border-gray-300/50 focus:ring-secondary-500/50 focus:border-secondary-500/50"
                    }`}
                    type="text"
                    name="subject"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      dark
                        ? "placeholder-gray-400 text-white bg-gray-700/50 border-gray-600/50 focus:ring-primary-500/50 focus:border-primary-500/50"
                        : "placeholder-gray-500 text-gray-900 bg-gray-100/50 border-gray-300/50 focus:ring-secondary-500/50 focus:border-secondary-500/50"
                    }`}
                    name="message"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                    dark
                      ? "text-white shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-primary-500/25"
                      : "text-white shadow-lg bg-secondary-500 hover:bg-secondary-600 hover:shadow-secondary-500/25"
                  }`}>
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
