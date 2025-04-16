import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function PageNotFound() {
  return (
    <div className="bg-violet-200 h-screen min-w-screen flex flex-col justify-center items-center">
      <p>Page Not found! </p>
      <Link to="/">
        <Button variant="primary">Go to Home</Button>
      </Link>
      
    </div>
  );
}
