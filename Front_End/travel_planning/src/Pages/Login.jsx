import { useForm } from "react-hook-form";
import Input from "../Components/Form/Input";
import Button from "../Components/Form/Button";
import { Link } from "react-router-dom";
import bg from "../Assets/login-form-image.jpg";
import * as request from "../Until/Request";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const email=data.email;
    const password=data.password;
    try {
      const res = await request.post("http://localhost:8080/user/login",{
        email,
        password
      })
      const username=res.data.username;
      alert("Đăng nhập thành công chào mừng: "+username);
    } catch (error) {
      console.log(error.response.data)
    }
    
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-slate-100 max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="my-4"
            error={errors.email?.message}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="my-4"
            error={errors.password?.message}
          />
          <div className="mb-4 text-center text-sm text-gray-700">
            New User?{" "}
            <Link to="/signup">
              <span className="underline">Sign Up Here</span>
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
