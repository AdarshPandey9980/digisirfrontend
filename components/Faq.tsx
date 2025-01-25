import React, { useState } from "react";

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (item) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12" id="faq">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#002B5B]">For more understanding, visit FAQs</h2>

      <div className="space-y-4">
        {/* Accordion Item 1 */}
        <div
          className={`border-none rounded-lg bg-[#F8F9FA] px-6 ${
            activeItem === "item-1" ? "shadow-lg" : ""
          }`}
        >
          <button
            className="w-full text-left text-[#002B5B] font-medium py-4 hover:no-underline focus:outline-none"
            onClick={() => toggleAccordion("item-1")}
          >
            Will the app have my coaching name?
          </button>
          {activeItem === "item-1" && (
            <p className="text-gray-600 pb-4">
              Yes, you can customize the app with your coaching name and branding.
            </p>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div
          className={`border-none rounded-lg bg-[#F8F9FA] px-6 ${
            activeItem === "item-2" ? "shadow-lg" : ""
          }`}
        >
          <button
            className="w-full text-left text-[#002B5B] font-medium py-4 hover:no-underline focus:outline-none"
            onClick={() => toggleAccordion("item-2")}
          >
            Can we add offline students in our app?
          </button>
          {activeItem === "item-2" && (
            <p className="text-gray-600 pb-4">
              Yes, you can add both online and offline students to manage all your students in one place.
            </p>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div
          className={`border-none rounded-lg bg-[#F8F9FA] px-6 ${
            activeItem === "item-3" ? "shadow-lg" : ""
          }`}
        >
          <button
            className="w-full text-left text-[#002B5B] font-medium py-4 hover:no-underline focus:outline-none"
            onClick={() => toggleAccordion("item-3")}
          >
            Any limitation on the number of students that can be added?
          </button>
          {activeItem === "item-3" && (
            <p className="text-gray-600 pb-4">
              There are no strict limitations on the number of students you can add to the platform.
            </p>
          )}
        </div>

        {/* Accordion Item 4 */}
        <div
          className={`border-none rounded-lg bg-[#F8F9FA] px-6 ${
            activeItem === "item-4" ? "shadow-lg" : ""
          }`}
        >
          <button
            className="w-full text-left text-[#002B5B] font-medium py-4 hover:no-underline focus:outline-none"
            onClick={() => toggleAccordion("item-4")}
          >
            How to start without recorded content?
          </button>
          {activeItem === "item-4" && (
            <p className="text-gray-600 pb-4">
              You can start by creating live sessions and gradually add recorded content as you develop your course
              materials.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
