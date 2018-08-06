import Loadable from "react-loadable";
import PageLoading from "../LoadingSpin/PageLoading";
import LoginPageLoading from "../LoadingSpin/LoginPageLoading";

export default function(loader) {
  return Loadable({
    loader,
    loading: PageLoading
  });
}

export const LoginPageLoader = function(loader) {
  return Loadable({
    loader,
    loading:LoginPageLoading
  })
};
