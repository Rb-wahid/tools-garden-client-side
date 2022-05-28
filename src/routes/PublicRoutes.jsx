import Home from "../pages/Home/Home";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import SocialSignin from "../auth/SocialSignin";
import Blogs from "../pages/Blogs";

export const PublicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/blogs", name: "Blog", Component: Blogs },
  { path: "/signin", name: "Signin", Component: Signin },
  { path: "/signup", name: "Signup", Component: Signup },
  { path: "/socialsignin", name: "SocialSignin", Component: SocialSignin },
];
