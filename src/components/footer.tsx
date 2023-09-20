const Footer = () => {
  return (
    <div className="bg-white w-full text-center md:text-end px-6 md:px-[12rem] py-4 border-t">
      <p>© {new Date().getFullYear()} | Alright Reserved. Developed by <a href="https://github.com/johnsonfash" className="text-purple-700">johnsonfash</a></p>
    </div>
  );
};

export default Footer;
