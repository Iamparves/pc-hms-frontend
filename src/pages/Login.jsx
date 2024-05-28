import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="container min-h-[calc(100dvh-80px)]">
        <div className="bg-white p-10">
          <h2>Signup</h2>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
