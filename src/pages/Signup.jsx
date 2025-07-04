const Signup = ({ setShowAuthPopup }) => {
  return (
    <section
      className="h-screen bg-primary-bg/60 fixed inset-0 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowAuthPopup("");
        }
      }}
    >
      <form className="rounded-lg max-w-[400px] w-full p-8 bg-secondary-bg">
        <h3 className="text-center text-xl font-semibold">User Signup</h3>

        {/* Input Container Name */}
        <div className="space-y-1 flex flex-col my-6">
          <label htmlFor="name" className="text-input-placeholder text-[15px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="type here..."
            autoFocus
            className="px-3 py-2 outline-none border border-border rounded"
          />
        </div>

        {/* Input Container Email */}
        <div className="space-y-1 flex flex-col my-6">
          <label htmlFor="email" className="text-input-placeholder text-[15px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="type here..."
            autoFocus
            className="px-3 py-2 outline-none border border-border rounded"
          />
        </div>

        {/* Input Container Password */}
        <div className="space-y-1 flex flex-col my-6">
          <label
            htmlFor="password"
            className="text-input-placeholder text-[15px]"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="type here..."
            className="px-3 py-2 outline-none border border-border rounded"
          />
        </div>

        {/*  */}
        <div className="space-y-1 flex flex-col my-6">
          <p className="text-[15px] text-input-placeholder">
            Already have an account?{" "}
            <span
              className="text-accent duration-200 hover:underline cursor-pointer"
              onClick={() => setShowAuthPopup("login")}
            >
              click here
            </span>
          </p>
        </div>

        {/* Submit Button */}
        <div className="space-y-1 flex flex-col my-6">
          <button
            type="submit"
            className="bg-accent px-3 py-2 rounded text-primary-bg text-lg font-semibold cursor-pointer duration-200 hover:bg-accent-hover shadow shadow-shadow"
          >
            Signup
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
