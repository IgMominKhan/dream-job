import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <div className="grid place-items-center h-screen">
            <div className="w-xl text-center">
                <h1 className="italic text-6xl">Oops!</h1>
                <p className="text-xl text-gray-600 mt-10 mb-2">Sorry, an unexpected error has occurred.</p>
                <p className="text-xl text-gray-600">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}