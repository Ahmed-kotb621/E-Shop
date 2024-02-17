import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!user.length) navigate('/');
    },
    [user],
  );
  return children;
}

export default ProtectedRoutes;
