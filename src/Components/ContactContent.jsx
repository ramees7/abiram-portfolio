import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { IoIosMailOpen } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TextField } from "@mui/material";
import { SiX } from "react-icons/si";

export default function ContactContent() {
  const { theme, textColor } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Name: ${name}%0AEmail: ${email}%0AComment: ${comment}`;
    const phoneNumber = "919037152849";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank"); // Open WhatsApp in new tab
  };
  return (
    <div
      className={` p-8 h-full ${
        theme === "dark" ? "bg-[#222] text-white" : "bg-[#e7e7e7] text-black"
      }`}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase">
          Get <span style={{ color: textColor }}>in Touch</span>
        </h2>
        <div
          className="flex justify-center items-center mb-6"
          style={{ color: textColor }}
        >
          <span
            className={`border-t-2 w-[40%] ${
              theme === "dark" ? "" : "border-gray-700"
            }`}
          ></span>
          <IoIosMailOpen className="text-2xl mx-6" />
          <span
            className={`border-t-2 w-[40%] ${
              theme === "dark" ? "" : "border-gray-700"
            }`}
          ></span>
        </div>
      </div>
      {/* Left Contact Info Section */}
      <div className="flex gap-6">
        <div
          className={`w-full md:w-1/3  p-6 ${
            theme === "dark" ? "bg-[#111]" : "bg-[#efe9e9]"
          }`}
        >
          <div className="space-y-4">
            <div>
              <h3
                className="text-lg font-semibold uppercase"
                style={{ color: textColor }}
              >
                PHONE
              </h3>
              <p className="flex items-center mt-2">
                <FaPhoneAlt className="mr-2" /> +91 9037152849
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold uppercase"
                style={{ color: textColor }}
              >
                EMAIL
              </h3>
              <p className="flex items-center mt-2">
                <AiOutlineMail className="mr-2" /> digitalabio09@gmail.com
              </p>
            </div>

            <div>
              <h3
                className="font-semibold text-lg uppercase"
                style={{ color: textColor }}
              >
                ADDRESS
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2" /> Kottakal, Kerala
              </p>
            </div>
            <div>
              <h3
                className="font-semibold text-lg uppercase"
                style={{ color: textColor }}
              >
                Social Profiles
              </h3>
              <div className="flex items-center gap-4 text-2xl mt-2">
                <a
                  href="https://www.instagram.com/abiodigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/abiram-nallat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61568249744934"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/abrrm_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiX />
                </a>
                <a
                  href="https://github.com/abiram-nallat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Message Form Section */}
        <div className="w-full md:w-2/3">
          <div className="">
            <h2 className="text-lg font-bold mb-4 uppercase">
              Feel Free to Drop Me a Line
            </h2>
            <p className="text-sm mb-8">
              If you have any suggestion, project or even you want to say
              Hello.. Please fill out the form below and I will reply you
              shortly.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center p-3 rounded-lg">
              <BsFillPersonFill className="text-xl mr-3 mt-5" />
              <TextField
                id="name"
                label="Your Name"
                variant="standard"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: { color: theme === "dark" ? "white" : "black" },
                }}
                InputProps={{
                  style: { color: theme === "dark" ? "white" : "black" },
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                }}
              />
            </div>
            <div className="flex items-center p-3 rounded-lg">
              <AiOutlineMail className="text-xl mr-3 mt-5" />
              <TextField
                id="email"
                label="Your Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                InputLabelProps={{
                  style: { color: theme === "dark" ? "white" : "black" },
                }}
                InputProps={{
                  style: { color: theme === "dark" ? "white" : "black" },
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                }}
              />
            </div>
            <div className="flex items-center p-3 rounded-lg">
              <BsFillPersonFill className="text-xl mr-3 mt-5" />
              <TextField
                id="comment"
                label="Your Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                variant="standard"
                className="w-full"
                InputLabelProps={{
                  style: { color: theme === "dark" ? "white" : "black" },
                }}
                InputProps={{
                  style: { color: theme === "dark" ? "white" : "black" },
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                }}
              />
            </div>
            <button
              type="submit"
              className=" text-white py-3 px-6 rounded-lg w-full text-lg font-semibold flex items-center justify-center"
              style={{ backgroundColor: textColor }}
            >
              Send Message <IoIosMailOpen className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
