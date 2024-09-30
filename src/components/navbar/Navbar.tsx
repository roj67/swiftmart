import { Input } from "../ui/input"
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  return (
    <div className="px-2 py-5 border-b-[1px] border-b-slate-300">
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Exclusive</h1>
            <div className="flex gap-8 justify-between">
                <a>Home</a>
                <a>Contact</a>
                <a>About</a>
                <a>Sign Up</a>
            </div>
            <div className="flex justify-between gap-4 items-center">
                <div className="relative w-52">
                    <Input type="text" placeholder="What are you looking for?"/>
                    <span className="absolute inset-y-0 right-1 flex items-center pl-3">
                        <CiSearch className="h-5 w-5 text-gray-500"/>
                    </span>
                </div>
                <MdFavoriteBorder className="h-6 w-6 text-gray-500"/>
                <MdOutlineShoppingCart className="h-6 w-6 text-gray-500"/>
                <CgProfile className="h-6 w-6 text-gray-500"/>
            </div>
        </div>
    </div>
  )
}
