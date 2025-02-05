import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "1 Year Plan",
    price: 20000,
    duration: "per year",
    description: "Perfect for getting started",
    features: ["Access to all basic features", "Unlimited students and teachers profile", "25GB cloud storage", "Email support","All the managements will be avaliable","live lectures and recording avaliable"],
  },
  {
    name: "1 Year Plan",
    price: 22500,
    duration: "per year",
    description: "Great value for growing educators",
    features: [
      "All features of 1st Plan",
      "Unlimited students and teachers profile",
      "50GB cloud storage",
      "Priority email & chat support",
      "Advanced analytics",
      "live lectures and recording avaliable"
    ],
  },
  {
    name: "1 Year Plan",
    price: 25000,
    duration: "per year",
    description: "Best value for established institutions",
    features: [
      "All features of 2nd  Plan",
      "Unlimited student profiles",
      "100GB cloud storage",
      "24/7 phone, email & chat support",
      "Custom integrations",
      "Dedicated account manager",
      "Personalized website"
    ],
  },
];

const PricingSection = ({name = "",email = ""}) => {
  const navigate = useNavigate();  // Initialize navigate hook

  const handleChoosePlan = (price) => {
    if (name === "" && email === "") {
      navigate("/sign-in");
    } else {
      navigate("/payment", { state: { price } });
      
    }
      // Pass the price via state
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to empower your teaching journey with DigiSir
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 border rounded-lg shadow-md ${
                index === 1 ? "border-blue-500 border-2" : "border-gray-200"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#002B5B]">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <div className="flex-grow">
                <span className="text-4xl font-bold text-[#002B5B]">₹{plan.price}</span>
                <div className="mb-6">
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <button
                  // onClick={() => handleChoosePlan(plan.price)}  // Pass the price of the selected plan
                  className="w-full bg-[#002B5B] hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  Choose a plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
