import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={34}
                        height={33}
                        style={{ opacity: 0.9 }}
                    />
                    <span
                        style={{
                            fontFamily: "'Fraunces', serif",
                            fontWeight: 600,
                            fontSize: "18px",
                            lineHeight: "28px",
                            letterSpacing: "-0.45px",
                            color: "#e2ddd6",
                        }}
                    >
                        Converso
                    </span>
                </div>
            </Link>
            <div className="flex items-center gap-6">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#e2ddd6",
                                border: "1px solid #172030",
                                borderRadius: "9999px",
                                padding: "8px 16px",
                                cursor: "pointer",
                                backgroundColor: "transparent",
                            }}
                        >
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
