function Login({ onLogin }) {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg w-[400px] mx-auto text-center transition-all duration-300  m-4 transform hover:scale-105">
      <form action="" id="Form">
        <div>
          <p>
            <input
              id="input"
              type="text"
              placeholder="USERNAME"
              className="border-1 w-full my-3 rounded p-2"
              required
            />
          </p>
          <p>
            <input
              id="input"
              type="password"
              placeholder="PASSWORD"
              className="border-1 w-full my-3 rounded p-2"
              required
            />
          </p>
          <p>
            <input
              id="input"
              type="text"
              placeholder="CONFIRM PASSWORD"
              className="border-1 w-full my-3 rounded p-2"
              required
            />
          </p>

          <h2 className=" font-bold mb-4 ">
            <a href="#">Forgot password?</a>
          </h2>
        </div>
      </form>
      <button
        onClick={onLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 w-full"
      >
        Log In
      </button>
    </div>
  );
}
export default Login;
