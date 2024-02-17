import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Order from '../features/Order/Order';
function LogIn() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(formData));
    toast.success('LogIn Successfully');
    navigate('/login');
  }

  if (user.length > 0) {
    return <Order />;
  }

  return (
    <div className="flex items-center justify-center  p-8">
      <div className="w-[300px]  sm:w-[350px]">
        <h1 className="m-auto my-3 mt-5 w-fit text-2xl font-bold">Sign Up</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="my-4 flex flex-col space-y-1">
            <label className="text-sm text-mainC">First Name</label>
            <input
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="first name..."
              type="text"
              name="firstName"
              required
            />
          </div>
          <div className="my-4 flex flex-col space-y-1">
            <label className="text-sm text-mainC">Last Name</label>
            <input
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="last name..."
              type="text"
              name="lastName"
              required
            />
          </div>
          <div className="my-4 flex flex-col space-y-1">
            <label className="text-sm text-mainC">Email Address</label>
            <input
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="email..."
              type="text"
              name="email"
              required
            />
          </div>
          <div className="my-4 flex flex-col space-y-1">
            <label className="text-sm text-mainC">Password</label>
            <input
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="password..."
              type="password"
              name="password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-yellowC p-2 font-semibold text-mainC hover:bg-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
