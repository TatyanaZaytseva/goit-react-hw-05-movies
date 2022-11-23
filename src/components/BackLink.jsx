import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="12" />
      {children}
    </Link>
  );
};
