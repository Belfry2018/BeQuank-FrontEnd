import Loadable from "react-loadable"
import PageLoading from "../LoadingSpin/PageLoading";

export default function (loader) {
    return Loadable({
        loader,
        loading:PageLoading
    })
}