
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMail = async (e) => {
    e.preventDefault();
    
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ email:false, required: true });
      return;
    }else if(!isValidEmail(userInput.email)){
      setError({ required:false, email: true });
      return;
    }else {
      setError({ email:false, required: false });
    }
      setIsLoading(true);
      emailjs
        .send(
          "service_qmy8u0j",
          "template_f8q6nzg",
          {
            from_name: userInput.name,
            to_name: "Mayank Singhal",
            message: userInput.message,
            to_email:  "mayanksinghal.dev@gmail.com",
            from_email: userInput.email,
            my_message: "Thankyou for contacting me, I'll reach out to you ASAP.",
          },
          "OHMnbJO-EVi_6j9oB",
        )
        .then(
          () => {
            setIsLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setUserInput({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setIsLoading(false);
            console.log(error)
            alert('Ahh, something went wrong. Please try again.');
          }
        );
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fiels are required!</p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
