import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="mx-24 my-24" id="question__one">
      <div className="question__one">
        <h1 className="text-5xl text-green-500 mb-8">What is Context API?</h1>
        <p className="text-justify font-medium text-xl">
          React এ একটা কম্পোনেন্ট থেকে অন্য কম্পোনেন্ট (Parent - Child) এ ডাটা
          পাঠানোর কাজটা সাধারণত Props এর মাধ্যমে করা হয়ে থাকে।কিন্তু,মাঝে মাঝে
          এমন টাইপের কিছু ডাটা থাকে(যেমনঃ- Local Preferrence,UI Theme) যেগুলো
          Props এর মাধ্যমে Pass করতে গেলে বেশ ঝামেলা পোহাতে হয়।Context API
          এক্ষেত্রে আমাদেরকে সহজেই এই ডাটাগুলো এক কম্পোনেন্ট থেকে অন্য
          কম্পোনেন্ট এ Props এর সাহায্য ছাড়াই Pass করতে সহায়তা করে থাকে।
        </p>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-5xl text-green-500 mb-8">Sementic Tag কী?</h1>
        <p className="text-justify font-medium text-xl">
          Sementic Tag হলো বিশেষ ধরণের HTML ট্যাগ যেগুলো ডেভেলপার ও ইউজার উভয়কেই
          ওই ট্যাগ কোন ধরণের কন্টেন্ট বহন করছে সে সম্পর্কে পরিষ্কার ধারণা দেয়।
          যেমনঃ Article ট্যাগ,এটি ব্যবহার করলে বুঝা যায় যে উক্ত ট্যাগটির মধ্যে
          যেকোনো ধরণের আর্টিকেল লিখা হয়েছে। এছাড়াও আরো নানা প্রকারের Semantic
          ট্যাগ এর ব্যবহার রয়েছে।যেমনঃ
          <ul className="text-red-500">
            <li>1)aside</li>
            <li>2)detail</li>
            <li>3)figcaption</li>
            <li>4)figure</li>
            <li>5)footer</li>
            <li>6)header</li>
            <li>7)main</li>
            <li>8)mark</li>
            <li>9)nav</li>
            <li>10)section</li>
            <li>11)summary</li>
            <li>12)time</li>
          </ul>
          ইত্যাদি।
        </p>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-5xl text-green-500 mb-8">
          Inline এবং Block Elements এর মধ্যে পার্থক্য কী?
        </h1>
        <p className="text-justify font-medium text-xl">
          HTML (Hypertext Markup Language) এ সাধারণত ২ ক্যাটাগরির Elements
          রয়েছে, একটি হলো{" "}
          <span className="text-xl text-red-600">Inline Elements</span> এবং
          অপরটি হলো <span className="text-xl text-red-600">Block Elements</span>
          ।যেসব এলিমেন্ট পাশাপাশি অবস্থান করে তাদেরকে Inline Elements এবং যেসব
          Element উপরে নিচে৷ অবস্থান করে তাদেরকে Block Elements বলা হয়ে থাকে।
          Block Elements সবসময় একটা নতুন লাইন তৈরি করে এবং ব্রাউজার
          অটোমেটিক্যালি কিছু স্পেস/মার্জিন দিয়ে দেয়। আর Inline Elements নিজের
          যতটুকু Width প্রয়োজন হয়,ততটুকু Width নেয়।
          <br />
          কিছু Inline Element এর উদাহরণ হলোঃ
          <ul className="text-red-500">
            <li>1)anchor</li>
            <li>2)code</li>
            <li>3)abbr</li>
            <li>4)em</li>
            <li>5)img</li>
            <li>6)i</li>
            <li>7)input</li>
            <li>8)script</li>
            <li>9)select</li>
            <li>10)strong</li>
            <li>11)sub</li>
            <li>12)sup</li>
          </ul>
          <br />
          কিছু Block Elements এর উদাহরণ হলোঃ
          <ul className="text-cyan-500">
            <li>1)aside</li>
            <li>2)address</li>
            <li>3)article</li>
            <li>4)div</li>
            <li>5)main</li>
            <li>6)nav</li>
            <li>7)section</li>
            <li>8)hr</li>
            <li>9)ol</li>
            <li>10)p</li>
            <li>11)pre</li>
            <li>12)footer</li>
          </ul>
          ইত্যাদি।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
