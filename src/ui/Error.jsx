function Error({ message }) {
  return (
    <div className="flex items-start justify-center text-lg font-bold">
      <h1 className="w-fit">{message || 'Error Fetching Data ! '}</h1>
    </div>
  );
}

export default Error;
