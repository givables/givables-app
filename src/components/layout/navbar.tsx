import Wallet from "../web3/wallet";

export default function Navbar() {

    return (
        <div className="flex items-center justify-between w-full h-20 px-4 sm:px-12">
            <div className="flex items-center">
                <img className="object-contain w-full h-12 sm:h-16" src="/assets/logo/logo.png" alt="" />
            </div>

            <div className="flex items-center">
                <Wallet/>
            </div>
        </div>
    )
}
