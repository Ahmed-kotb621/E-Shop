import { useState } from 'react';
function LogIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex items-center justify-center  p-8">
      <div className="w-[300px]  sm:w-[350px]">
        <h1 className="m-auto my-3 mt-5 w-fit text-2xl font-bold">Sign Up</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="my-4 flex flex-col space-y-1">
            <label className="text-sm text-mainC">Your Name</label>
            <input
              className="rounded-md border-none  bg-secondaryC p-2 focus:outline-none focus:ring focus:ring-yellowC focus:ring-offset-2"
              value={formData.name}
              onChange={handleChange}
              placeholder="name..."
              type="text"
              name="name"
              required
            />
          </div>
          <div className="my-4 flex flex-col space-y-1">
            <label className="text-sm text-mainC">Email Address</label>
            <input
              className="rounded-md border-none  bg-secondaryC p-2 focus:outline-none focus:ring focus:ring-yellowC focus:ring-offset-2"
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
              className="rounded-md border-none  bg-secondaryC p-2 focus:outline-none focus:ring focus:ring-yellowC focus:ring-offset-2"
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
              className="w-full rounded-full bg-yellowC p-2 font-semibold text-mainC"
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
