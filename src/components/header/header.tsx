import LogoMin from "../logo/logo-min";

export default function Header() {
    return (
        <div className="flex flex-row border-b py-3 justify-between bg-black">
            {/* Logo */}
            <div className="ml-10">
                <LogoMin/>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-10 mr-10 items-center">
                <h1>Home</h1>
                <h1>About</h1>
            </div>
        </div>
    );
}