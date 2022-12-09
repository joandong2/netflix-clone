import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center p-10 text-sm font-grey">
        <div className="w-[55%]">
          <ul className="flex">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillYoutube />
              </a>
            </li>
          </ul>
          <div className="flex columns-4">
            <div>
              <ul>
                <li>
                  <a href="#">Audio Description</a>
                </li>
                <li>
                  <a href="#">Investor Notices</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
                <li>
                  <a href="#">Do Not Sell or Share My Personal Information</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <p>&copy; 1997-2022 Netflix, Inc.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
