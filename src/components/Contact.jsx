import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "../data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const WhatsappIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Replace this with your Web3Forms Access Key
    const accessKey = "a6f4f8a0-4441-4294-9935-36ca1c9e1168";



    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await res.json();
      if (res.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        console.error(result);
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start justify-between">

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full lg:max-w-lg"
          >
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-6 text-white tracking-tight">
              Let's Start a <span className="text-[#00d4ff]">Project</span>
            </h2>
            <p className="font-body text-[#8ba3b0] text-[17px] mb-12 leading-relaxed max-w-md">
              I'm always open to discussing product design work or partnership opportunities.
              Feel free to reach out to me via email or social media.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="text-[#00d4ff]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <span className="text-[#e2eaf0] text-lg">kunalmalviya855@gmail.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="text-[#00d4ff]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 -ml-0.5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#e2eaf0] text-lg">Pune, Maharashtra, India</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-[#00d4ff]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#e2eaf0] text-lg">+91 8554814711</span>
              </div>
            </div>

            {/* Social Icons Stack */}
            <div className="flex items-center gap-4">
              <a href={personal.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1b222c] border border-[#2d3748] flex items-center justify-center text-[#e2eaf0] hover:bg-[#00d4ff] hover:border-[#00d4ff] hover:text-black transition-all">
                <GithubIcon />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1b222c] border border-[#2d3748] flex items-center justify-center text-[#e2eaf0] hover:bg-[#00d4ff] hover:border-[#00d4ff] hover:text-black transition-all">
                <LinkedinIcon />
              </a>
              <a href={personal.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1b222c] border border-[#2d3748] flex items-center justify-center text-[#e2eaf0] hover:bg-[#00d4ff] hover:border-[#00d4ff] hover:text-black transition-all">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/918554814711" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1b222c] border border-[#2d3748] flex items-center justify-center text-[#e2eaf0] hover:bg-[#00d4ff] hover:border-[#00d4ff] hover:text-black transition-all">
                <WhatsappIcon />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-[600px] bg-[#11161d] rounded-[32px] p-8 sm:p-10 border border-[#1e2d3d]"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-2xl px-5 py-4 text-[#e2eaf0] placeholder-[#4a6a7a] focus:outline-none focus:border-[#00d4ff] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-2xl px-5 py-4 text-[#e2eaf0] placeholder-[#4a6a7a] focus:outline-none focus:border-[#00d4ff] transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-2xl px-5 py-4 text-[#e2eaf0] placeholder-[#4a6a7a] focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
                required
                className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-2xl px-5 py-4 text-[#e2eaf0] placeholder-[#4a6a7a] focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
              ></textarea>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-[#00d4ff] text-black font-semibold rounded-2xl px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#00b8e6] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-70 disabled:hover:shadow-none transition-all max-w-fit"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    "Sent successfully! ✅"
                  ) : status === "error" ? (
                    "Failed to send"
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                      </svg>
                    </>
                  )}
                </button>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
