const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-text/20 px-8 md:px-32 py-6 flex flex-col gap-2">
      <p className="text-sm text-text/60">
        © {currentYear} Junsung Yoon. All rights reserved.
      </p>
      <p className="text-sm text-text/60">
        Contact:{" "}
        <a href="mailto:yoonjs0510@gmail.com" className="underline">
          yoonjs0510@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
