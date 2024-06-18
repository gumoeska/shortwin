export default function Logo() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b">
                Short.win
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-0">
                Paste the URL to be shortened
            </p>
        </div>
    );
}