import Home from "../pages/Home/Home";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import SocialSignin from "../auth/SocialSignin";
import Blogs from "../pages/Blogs";
import MyPortfolio from "../pages/MyPortfolio";

export const PublicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/blogs", name: "Blog", Component: Blogs },
  { path: "/portfolio", name: "MyPortfolio", Component: MyPortfolio },
  { path: "/signin", name: "Signin", Component: Signin },
  { path: "/signup", name: "Signup", Component: Signup },
  { path: "/socialsignin", name: "SocialSignin", Component: SocialSignin },
];
