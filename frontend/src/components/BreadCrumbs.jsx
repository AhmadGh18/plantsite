import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbs = ({ items = [] }) => {
  return (
    <div className="bg-light py-5 md:py-6 px-6 md:px-12 w-full text-sm text-secondary font-light flex items-center space-x-1 border-b border-accent/20">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && <FaChevronRight className="text-muted text-xs" />}
            {isLast ? (
              <span className="capitalize text-muted font-light">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-secondary hover:text-dark hover:font-normal transition-all duration-200 capitalize font-light"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
