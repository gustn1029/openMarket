import { url } from "./main";

const Logout = () => {
  localStorage.removeItem("user");
  window.location.href = `/openMarket/#`;
  window.location.reload();
  localStorage.removeItem("beforePage");
};

export default Logout;
