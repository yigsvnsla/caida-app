
export const Header = () => {
  return (
    <header className="navbar bg-neutral text-neutral-content mx-auto m-4 rounded-full shadow-lg max-w-screen-2xl">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl rounded-full ">Caida App</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};