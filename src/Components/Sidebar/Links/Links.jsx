const Links = () => {
  const linkItems = ["Home", "Services", "Projects", "Contact"];

  return (
    <div className="links">
      {linkItems?.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default Links;
