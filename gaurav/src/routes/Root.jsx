import { Link } from "react-router-dom"

export const Root = () => {
  return (
    <div className="flex justify-center items-center bg-purple-500">
        <ul className="flex justify-center items-center gap-3 p-3">
            <li className="text-white font-medium">
                <Link to="/">Home</Link>
            </li>
            <li className="text-white font-medium">
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>
  )
}
