import Loadable from "react-loadable"
import PageLoading from "../LoadingSpin/PageLoading";
import React from "react";


export default function (loader) {
    return Loadable({
        loader,
        loading:PageLoading
    })
}