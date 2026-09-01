import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");

      alert(`Welcome, ${user.name}!`);
      return;
    }

    alert("Invalid email or password.");
  };

  return (
    <div className="grid h-full w-full grid-cols-2">

      <div className="h-full w-full overflow-hidden border-r border-[#3a3a3a] px-[6%] py-[7%]">

        {/* Logo */}
        <div className="flex w-full items-center gap-[2%]">

          <div className="flex aspect-square w-[8%] items-center justify-center rounded-[30%] bg-[#c6ff00]">
            <svg
              width="55%"
              height="55%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 2L3 14H11L10 22L21 9H13L13 2Z"
                fill="black"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-[2.3vw] font-bold tracking-[-0.1vw] text-white">
            Sky<span className="text-[#c6ff00]">Mart</span>
          </div>

        </div>


        <div className="mt-[7%]">

          <p className="text-[1.15vw] font-semibold tracking-[0.08vw] text-[#c6ff00]">
            WELCOME BACK
          </p>

          <h1 className="mt-[5%] text-[4vw] font-bold leading-[1.08] tracking-[-0.15vw] text-white">
            Shop the future.
            <br />
            <span className="text-[#c6ff00]">Today.</span>
          </h1>

          <p className="mt-[7%] max-w-[90%] text-[1.25vw] font-medium leading-[1.65] text-[#777777]">
            Thousands of products, lightning-fast delivery, and
            <br />
            prices that make your wallet happy.
          </p>


          {/* Statistics */}
          <div className="mt-[10%] flex w-full gap-[3%]">

            <div className="flex aspect-[2/1] w-[30%] flex-col items-center justify-center rounded-[12px] border border-[#d0d0d0]">
              <p className="text-[1.5vw] font-bold text-[#c6ff00]">
                20K+
              </p>

              <p className="mt-[2%] text-[0.9vw] font-semibold text-[#777777]">
                Products
              </p>
            </div>


            <div className="flex aspect-[2/1] w-[30%] flex-col items-center justify-center rounded-[12px] border border-[#d0d0d0]">
              <p className="text-[1.5vw] font-bold text-[#c6ff00]">
                50K+
              </p>

              <p className="mt-[2%] text-[0.9vw] font-semibold text-[#777777]">
                Users
              </p>
            </div>


            <div className="flex aspect-[2/1] w-[30%] flex-col items-center justify-center rounded-[12px] border border-[#d0d0d0]">
              <p className="text-[1.5vw] font-bold text-[#c6ff00]">
                4.9★
              </p>

              <p className="mt-[2%] text-[0.9vw] font-semibold text-[#777777]">
                Rating
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#0d0d0d]">

        {/* Sign in card */}
        <div
          className="
            flex
            h-auto
            max-h-[85%]
            w-[75%]
            flex-col
            rounded-[5%]
            border
            border-[#303030]
            bg-[#111111]
            px-[7%]
            py-[7%]
          "
        >

          {/* Heading */}
          <h2 className="text-[2vw] font-bold tracking-[-0.08vw] text-white">
            Sign in
          </h2>

          <p className="mt-[2%] text-[1.15vw] font-medium text-[#707070]">
            Enter your credentials to continue
          </p>


          {/* Email */}
          <div className="relative mt-[10%]">

            <svg
              className="absolute left-[4%] top-1/2 -translate-y-1/2"
              width="5%"
              height="5%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#666666"
                strokeWidth="1.8"
              />

              <path
                d="M3 7L12 13L21 7"
                stroke="#666666"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>


            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                h-[10%]
                min-h-[3.5rem]
                w-full
                rounded-[12px]
                border
                border-[#383838]
                bg-[#202020]
                pl-[5%]
                pr-[5%]
                text-[1.1vw]
                font-medium
                text-white
                outline-none
                placeholder:text-[#666666]
                focus:border-[#c6ff00]
              "
            />

          </div>


          {/* Password */}
          <div className="relative mt-[4%]">

            <svg
              className="absolute left-[4%] top-1/2 -translate-y-1/2"
              width="5%"
              height="5%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="4"
                y="10"
                width="16"
                height="11"
                rx="2"
                stroke="#666666"
                strokeWidth="1.8"
              />

              <path
                d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10"
                stroke="#666666"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>


            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                h-[10%]
                min-h-[3.5rem]
                w-full
                rounded-[12px]
                border
                border-[#383838]
                bg-[#202020]
                pl-[5%]
                pr-[14%]
                text-[1.1vw]
                font-medium
                text-white
                outline-none
                placeholder:text-[#666666]
                focus:border-[#c6ff00]
              "
            />


            {/* Eye */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="
                absolute
                right-[4%]
                top-1/2
                flex
                aspect-square
                w-[5%]
                -translate-y-1/2
                items-center
                justify-center
                text-[#666666]
                hover:cursor-pointer
              "
            >

              {showPassword ? (

                <svg
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 3L21 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M10.6 10.6C10.2 11 10 11.5 10 12C10 13.1 10.9 14 12 14C12.5 14 13 13.8 13.4 13.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M9.9 5.1C10.6 4.9 11.3 4.8 12 4.8C17.5 4.8 21 12 21 12C21 12 19.8 14.4 17.6 16.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M6.4 7.8C4.2 9.5 3 12 3 12C3 12 6.5 19.2 12 19.2C13.4 19.2 14.7 18.8 15.8 18.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>

              ) : (

                <svg
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.5 12C2.5 12 6 5 12 5C18 5 21.5 12 21.5 12C21.5 12 18 19 12 19C6 19 2.5 12 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>

              )}

            </button>

          </div>


          {/* Sign in button */}
          <button
            type="button"
            onClick={handleLogin}
            className="
              mt-[4%]
              flex
              min-h-[3.5rem]
              w-full
              items-center
              justify-center
              gap-[3%]
              rounded-[12px]
              bg-[#c6ff00]
              text-[1.3vw]
              font-semibold
              text-black
              transition
              hover:cursor-pointer
            "
          >

            <span>Sign in</span>

            <svg
              width="7%"
              height="7%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>


          {/* Create account */}
          <p className="mt-[6%] text-center text-[1.05vw] font-semibold text-[#686868]">
            Don't have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-[#c6ff00] hover:cursor-pointer"
            >
              Create one
            </button>

          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;