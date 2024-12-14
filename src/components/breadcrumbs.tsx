const Breadcrumbs = ({ link }: { link: string }) => {
  const linkParts = link.split("/");
  return (
    <div>
      {linkParts.map((link) => (
        <span key={link}>{link} </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
