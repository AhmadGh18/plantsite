import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbs = ({ items = [] }) => {
  return (
    <div className="bg-gray-200 py-4 px-6 w-full text-sm text-gray-700 font-medium flex items-center space-x-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && <FaChevronRight className="text-gray-500 text-xs" />}
            {isLast ? (
              <span className="capitalize text-gray-500">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="text-secondprimary hover:underline capitalize"
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
