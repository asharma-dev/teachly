export const TopNavigation = () => {
  return (
    <div className="nav-container">
      <div className="logo-brand">Logo</div>

      <NavLinks />
    </div>
  );
};

const NavLinks = () => {
  const links = [
    {
      link: "",
      href: "",
      title: "About",
    },
    {
      link: "",
      href: "",
      title: "Our mission",
    },
    {
      link: "",
      href: "",
      title: "Our values",
    },
    {
      link: "",
      href: "",
      title: "Testimonials",
    },
    {
      link: "",
      href: "",
      title: "Contact",
    },
  ];

  return (
    <div className="flex gap-8">
      {links.map((link, i) => {
        return <p key={i}>{link.title}</p>;
      })}
    </div>
  );
};
