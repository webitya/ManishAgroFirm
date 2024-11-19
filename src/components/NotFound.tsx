const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500">Go back to Home</a>
    </div>
  );
}

export default NotFound;
