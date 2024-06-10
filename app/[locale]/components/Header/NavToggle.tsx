const NavToggle = ({ navbarToggleHandler, navbarOpen, sticky }) => {
  return (
    <button
      onClick={navbarToggleHandler}
      id="navbarToggler"
      aria-label="Mobile Menu"
      className="focus:color-[green] inline-block rounded-lg px-4 xl:hidden relative z-[999]"
    >
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-dark ${
          navbarOpen ? " top-[7px] rotate-45 !bg-white" : " "
        }`}
      />
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-dark ${
          navbarOpen ? "opacity-0 !bg-white" : " "
        }`}
      />
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-dark ${
          navbarOpen ? " top-[-8px] -rotate-45 !bg-white" : " "
        }`}
      />
    </button>
  );
};

export default NavToggle;
