import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="flex h-full w-full flex-col">

      {/* LOGO */}
      <div className="flex shrink-0 justify-center pt-[3vh]">
        <div className="flex items-center gap-[0.7vw]">

          <div className="flex aspect-square w-[3vw] items-center justify-center rounded-[25%] bg-[#c6ff00]">
            <svg
              className="h-[55%] w-[55%]"
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

          <div className="text-[2vw] font-bold tracking-[-0.08vw] text-white">
            Sky<span className="text-[#c6ff00]">Mart</span>
          </div>

        </div>
      </div>


      {/* CARD AREA */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-[2%] py-[3vh]">

        {/* CARD */}
        <div
          className="
            w-[37%]
            rounded-[5%]
            border
            border-[#303030]
            bg-[#111111]
            px-[2.7%]
            py-[3%]
          "
        >

          <h1 className="text-[2vw] font-bold tracking-[-0.08vw] text-white">
            Create account
          </h1>

          <p className="mt-[1.5%] text-[1.1vw] font-medium text-[#707070]">
            Join SkyMart and start shopping
          </p>


          {/* FULL NAME */}
          <div className="relative mt-[7%]">

            <svg
              className="absolute left-[4%] top-1/2 aspect-square w-[5%] -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="#666666"
                strokeWidth="1.8"
              />

              <path
                d="M5 20C5 16.7 7.7 14 11 14H13C16.3 14 19 16.7 19 20"
                stroke="#666666"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                h-[8.5vh]
                w-full
                rounded-[12px]
                border
                border-[#383838]
                bg-[#202020]
                pl-[14%]
                pr-[14%]
                text-[1.1vw]
                font-medium
                text-white
                outline-none
                placeholder:text-[#666666]
                focus:border-[#c6ff00]
              "
            />

          </div>


          {/* EMAIL */}
          <div className="relative mt-[3%]">

            <svg
              className="absolute left-[4%] top-1/2 aspect-square w-[5%] -translate-y-1/2"
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
              />
            </svg>

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                h-[8.5vh]
                w-full
                rounded-[12px]
                border
                border-[#383838]
                bg-[#202020]
                pl-[14%]
                pr-[14%]
                text-[1.1vw]
                font-medium
                text-white
                outline-none
                placeholder:text-[#666666]
                focus:border-[#c6ff00]
              "
            />

          </div>


          {/* PASSWORD */}
          <div className="relative mt-[3%]">

            <svg
              className="absolute left-[4%] top-1/2 aspect-square w-[5%] -translate-y-1/2"
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
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                h-[8.5vh]
                w-full
                rounded-[12px]
                border
                border-[#383838]
                bg-[#202020]
                pl-[14%]
                pr-[14%]
                text-[1.1vw]
                font-medium
                text-white
                outline-none
                placeholder:text-[#666666]
                focus:border-[#c6ff00]
              "
            />

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
                cursor-pointer
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


          {/* CONFIRM PASSWORD */}
          <div className="relative mt-[3%]">

            <svg
              className="absolute left-[4%] top-1/2 aspect-square w-[5%] -translate-y-1/2"
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
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="
                h-[8.5vh]
                w-full
                rounded-[12px]
                border
                border-[#383838]
                bg-[#202020]
                pl-[14%]
                pr-[14%]
                text-[1.1vw]
                font-medium
                text-white
                outline-none
                placeholder:text-[#666666]
                focus:border-[#c6ff00]
              "
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
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
                cursor-pointer
              "
            >

              {showConfirmPassword ? (

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


          {/* CREATE ACCOUNT */}
          <button
            type="button"
            onClick={handleRegister}
            className="
              mt-[3%]
              flex
              h-[8.5vh]
              w-full
              items-center
              justify-center
              gap-[3%]
              rounded-[12px]
              bg-[#c6ff00]
              text-[1.25vw]
              font-semibold
              text-black
              cursor-pointer
            "
          >

            <span>Create Account</span>

            <svg
              className="h-[6%] w-[6%]"
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


          {/* SIGN IN */}
          <p className="mt-[4%] text-center text-[1vw] font-semibold text-[#686868]">

            Already have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#c6ff00] cursor-pointer"
            >
              Sign in
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;