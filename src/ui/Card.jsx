export default function Card({ children }) {
  return (
    <div className="overflow-hidden rounded-md bg-lightPrimary shadow-md">
      {children}
    </div>
  );
}

const Header = ({ children, hasImage }) => {
  // If there is an image, no padding; otherwise, apply padding.
  return <div className={hasImage ? "" : "p-4"}>{children}</div>;
};

const Body = ({ children, hasHeader, hasFooter }) => {
  // Apply border top if there's a Header and border bottom if there's a Footer.
  const borderClasses = `${hasHeader ? "border-t" : ""} ${
    hasFooter ? "border-b" : ""
  } border-gray-300`;

  return <div className={`p-4 ${borderClasses}`}>{children}</div>;
};

export const Footer = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
