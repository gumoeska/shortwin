import { FaRegPaste } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function InputButton() {
    return(
        <div className="flex flex-row">
            <Input />
            <div className="justify-center items-center absolute">
                <Button variant={"outline"}>
                    <FaRegPaste />
                </Button>
            </div>
        </div>
    );
}