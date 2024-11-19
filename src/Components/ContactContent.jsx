import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { IoIosMailOpen } from "react-icons/io";
import {
  FaSkype,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TextField } from "@mui/material";

export default function ContactContent() {
  const { theme, textColor } = useContext(ThemeContext);

  return (
    <div className="bg-[#222] text-white p-8 md:px-20 h-full">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase">
          Get <span style={{ color: textColor }}>in Touch</span>
        </h2>
        <div
          className="flex justify-center items-center mb-6"
          style={{ color: textColor }}
        >
          <span className="border-t-2 w-[40%]"></span>
          <IoIosMailOpen className="text-2xl mx-6" />
          <span className="border-t-2 w-[40%]"></span>
        </div>
      </div>
      {/* Left Contact Info Section */}
      <div className="flex gap-6">
        <div className="w-full md:w-1/3 bg-[#111] p-6 ">
          <div className="space-y-4">
            <div>
              <h3
                className="text-lg font-semibold uppercase"
                style={{ color: textColor }}
              >
                PHONE
              </h3>
              <p className="flex items-center mt-2">
                <FaPhoneAlt className="mr-2" /> +34 62 11 84 01
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
                <AiOutlineMail className="mr-2" /> you@yourwebsite.com
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold uppercase"
                style={{ color: textColor }}
              >
                SKYPE
              </h3>
              <p className="flex items-center mt-2">
                <FaSkype className="mr-2" /> linda.smith
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
                <FaMapMarkerAlt className="mr-2" /> Moscow, Russia
              </p>
            </div>
            <div>
              <h3
                className="font-semibold text-lg uppercase"
                style={{ color: textColor }}
              >
                Social Profiles
              </h3>
              <div className="flex items-center gap-3 text-2xl mt-2">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
                <FaGithub />
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
          <form className="space-y-2">
            <div className="flex items-center p-3 rounded-lg">
              <BsFillPersonFill className="text-xl mr-3 mt-5" />
              <TextField
                id="name"
                label="Your Name"
                variant="standard"
                className="w-full"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: textColor,
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
                className="w-full"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: textColor,
                  },
                }}
              />
            </div>
            <div className="flex items-center p-3 rounded-lg">
              <BsFillPersonFill className="text-xl mr-3 mt-5" />
              <TextField
                id="comment"
                label="Your Comment"
                variant="standard"
                className="w-full"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: textColor,
                  },
                }}
              />
            </div>
            <button
              type="submit"
              className=" text-black py-3 px-6 rounded-lg w-full text-lg font-semibold flex items-center justify-center"
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
