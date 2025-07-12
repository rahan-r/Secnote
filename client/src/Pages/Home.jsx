import FooterSection from "@/components/footer-two";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import LaunchUI from "../components/logos/launch-ui";

function Home() {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/create");
  };

  return (
    <>
      {/* <div className="relative z-10 text-black text-6xl font-bold is-font">
        <LaunchUI/>
        secnote
       </div> */}
      <a
        href="/"
        className="relative z-10 inline-flex items-center gap-2 text-4xl font-bold is-font -mb-4 px-4 py-2 pb-4 w-auto"
      >
        <LaunchUI />
        Secnote
      </a>

      <InteractiveGridPattern
        className={"bg-[#ffffff] "}
        squaresClassName="hover:fill-blue-500"
      />
      <div className="relative z-10 text-center px-4 pt-[193px] pointer-events-none">
        <h1 class="text-5xl sm:text-[80px] font-bold leading-[1.1]">
          <span class="block inter-font text-black">
            Send <span class="italic is-font font-light">Self-Destructing</span>
          </span>
          <span class="block inter-font text-black">Notes Instantly.</span>
        </h1>
        <p className="mt-4 text-lg text-black/80 g-font">
          Encrypted one-time notes. No traces. No logs.
        </p>
      </div>

      <div className="relative z-20 mt-8 flex justify-center pointer-events-auto">
        <button
          onClick={buttonClickHandler}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-[10px] shadow transition-all duration-200 cursor-pointer g-font"
        >
          Create a Note
        </button>
      </div>
      {/* <div className='bg-white relative z-20 mt-[261px] h-[142px]'>
      <FooterSection/>
    </div> */}
    </>
  );
}

export default Home;
