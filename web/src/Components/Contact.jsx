import React, { useRef, useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const socialLinks = {
    github: "https://github.com/AmericoRoca",
    linkedin: "https://www.linkedin.com/in/americoroca/?locale=en_US",
  };

  const SITE_KEY = "6Lfxx0wrAAAAALxvV0UDxBBob9sK76pfXjGI8BBm";

  const form = useRef();
  const recaptchaRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        setError("Please verify reCAPTCHA");
        setSending(false);
        return;
      }

      await emailjs.sendForm(
        "service_rwryy9g", // reemplaza con tu Service ID de EmailJS
        "template_t92omfk", // reemplaza con tu Template ID
        form.current,
        "k3dU6E1XfxdArftZV" // reemplaza con tu User/Public Key
      );

      setSuccess(true);
      form.current.reset();
    } catch (err) {
      console.error(err);
      setError("Error sending message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="!py-20 bg-black w-full">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center !py-8">
          <h2 className="!text-3xl !md:text-5xl !font-bold !mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out and let's create something amazing together.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 py-4">
                <div className="p-3 bg-zinc-900 rounded-md">
                  <MailIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:americochiclana@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    americochiclana@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <div className="p-3 bg-zinc-900 rounded-md">
                  <PhoneIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a
                    href="tel:+34744729453"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +34 744729453
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <div className="p-3 bg-zinc-900 rounded-md">
                  <MapPinIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Cádiz, Spain</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {["github", "linkedin"].map((platform) => (
                  <a
                    key={platform}
                    href={socialLinks[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
                    aria-label={`Connect on ${platform}`}
                  >
                    <img
                      src={`https://api.iconify.design/simple-icons:${platform}.svg?color=ffffff`}
                      alt={platform}
                      className="w-5 h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="!px-8 py-3 bg-white text-black font-medium !rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                {sending ? "Sending..." : "Send Message"} <SendIcon size={16} />
              </button>

              <ReCAPTCHA
                sitekey={SITE_KEY}
                size="invisible"
                ref={recaptchaRef}
                badge="bottomright"
              />

              {error && <p className="text-red-500">{error}</p>}
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
