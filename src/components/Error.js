import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry for the inconvenience. Please try again later.</p>
      <h2>Error Details:</h2>
      <p>{error.status} - {error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
