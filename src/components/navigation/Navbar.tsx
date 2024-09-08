import Image from "next/image";
// import Logo from "../../../public/images/sourinmark.svg"
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
    return (
        <nav className="flex items-center">
            <div className="flex items-center">
                {/* <Image
                    src={Logo}
                    height={40}
                    width={40}
                    alt="Droportal"
                    // className="pr-5"
                /> */}
            </div>
            <div className="flex items-center">
                <ul className="flex items-center NavList">
                    <li><button>Features</button></li>
                    <li><button>Guide</button></li>
                    <li><button>Pricing <span>Free</span></button></li>
                    <li><button>What are we solving?</button></li>
                </ul>
            </div>
            <div className="flex flex-grow justify-end">
                <div className="flex">
                    <button className="flex items-center">
                        Sign In <span><ChevronRightIcon className="size-5" /></span>
                    </button>
                    <button className="flex items-center NavCTA">
                        Get Started <span><ChevronRightIcon className="size-5" /></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}