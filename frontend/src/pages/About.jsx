import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt="About Forever"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to <strong>Forever</strong>, your go-to destination for
            stylish, high-quality clothing. We believe in empowering individuals
            to express their unique style with confidence. At Forever, we
            carefully curate a diverse range of apparel that combines
            fashion-forward designs with exceptional comfort, making sure you
            always look and feel your best.
          </p>
          <p>
            Whether you're seeking everyday essentials, chic outfits for special
            occasions, or the latest trends, Forever offers something for
            everyone. Our commitment to sustainability and innovation ensures
            that our fashion is not only timeless but also environmentally
            conscious. We strive to provide our customers with an unparalleled
            shopping experience, blending style, comfort, and responsibility.
          </p>
          <p>
            Thank you for choosing Forever. Join us in making the world a more
            stylish place, one outfit at a time.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To empower individuals through fashion by offering stylish,
            sustainable clothing that inspires confidence and self-expression.
          </p>
        </div>
      </div>
      <div className="text-xl  py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            strin Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            We meticulously select and vet each Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quaerat, error!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            repellat labore amet, dolorum sequi corporis modi ipsum dignissimos?
          </p>
        </div>
      </div>
    <NewsLetterBox/>

    </div>
  );
};

export default About;
