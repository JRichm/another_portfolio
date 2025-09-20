export default function Header() {
    return (
        <div className="fixed w-full flex flex-row justify-between bg-gray-800 h-16 items-center p-6 z-10">
            <div>
                <h4>James Richmond</h4>
            </div>
            <div className="flex flex-row gap-6">
                <h5>linkedin</h5>
                <h5>pers github</h5>
                <h5>work github</h5>
                <h5>email</h5>
            </div>
        </div>
    )
}