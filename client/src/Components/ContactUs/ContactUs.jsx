import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import mapImage from "./image/map_image.png";
import backgroundImage from "./image/footerBackground.png";
function ContactUs() {
  return (
    <div className="mainContainer">
      <div className="map cursor-pointer">
        <img src={mapImage} alt="" />
      </div>
      <div className="getInTouch">
        <h1 className=" flex justify-center font-body font-thin mt-8 mb-">
          Get In Touch With Us
        </h1>

        <hr className=" shortLine mb-8 -mt-[10px] h-[1.4px] w-16 bg-[#fbb331] border-none" />

        <p className=" flex justify-center items centre mb-12 font-body text-[#979797]">
          We are here to help. Want to learn more about our services? Please get
          in touch, we want to hear from you!
        </p>
      </div>
      <div className=" middle flex items-center justify-center">
        <div className="inputForm">
          <form>
            <div className="mt-10 mr-[6rem]">
              <div className="userName">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Name"
                  className="p-4 w-[450px] mb-[35px] border-2"
                />
              </div>
              <div className="userMail">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="p-4 w-[450px] mb-[35px] border-2"
                />
              </div>
              <div className="userNumber">
                <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Phone"
                  className="p-4 w-[450px] mb-[35px] border-2"
                />
              </div>
              <div className="messageUs">
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message"
                  className=" p-4 w-[450px] h-[120px] mb-[35px] border-2 "
                />
              </div>
              <button className=" p-4 w-56 rounded bg-[#ff971f] text-white border-none font-body cursor-pointer hover:bg-[#ff6600]/[.8] ">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        <div className=" right p-12 pb-[58px] -mt-[9.5rem] h-[200px] w-[270px] border-dashed border-black/[.3] border-1">
          <h2 className="font-body -mt-[18px] font-thin ">HEADQUATER</h2>
          <div className=" findus mb-8 location flex items-center font-body">
            <div className=" locationIcon text-[#ff971f]">
              <FaLocationPin />
            </div>
            <p className="ml-4 text-[#979797]">
              K16 Zango Street, Gwarimpa Abuja
            </p>
          </div>
          <div className=" callus flex items-center font-body">
            <div className=" phoneIcon text-[#ff971f]">
              <BsFillTelephoneFill />
            </div>
            <p className="ml-4 text-[#979797]">+622025550117</p>
          </div>
          <div className=" mailus flex items-center font-body">
            <div className=" envelopeIcon text-[#ff971f]">
              <FaEnvelope />
            </div>
            <p className="ml-4 text-[#55acee] underline underline-offset-1 cursor-pointer ">
              hitreasurecart@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="bottom relative mt-16 ">
        <div className="bottomImage opacity-[.10]">
          <img
            className="object-fill w-full h-full"
            src={backgroundImage}
            alt=""
          />
        </div>
        <div className="downloadApp absolute inset-0">
          <div className="flex items-center justify-center gap-56 mt-14 font-body">
            <div className="bottomLeft text-center">
              <h2 className="text-[#fbb331] font-thin">
                Do You Like Treasure Cart? Download it Now
              </h2>
              <p className=" -mt-4 font-body text-[#979797]">
                Available on Play Store and App Store
              </p>
            </div>
            <div className="bottomButton">
              <button className="p-[15px] mt-[12px] rounded w-68 bg-[#ff971f] text-white border-none font-body cursor-pointer hover:bg-[#ff6600]/[.8]">
                DOWNLOAD NOW! - FOREVER FREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
