import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "rgba(11, 15, 21, 0.9)",
        borderBottom: "1px solid #172030",
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 56px",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Logo */}
      <Link href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <div style={{ opacity: 0.9 }}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={34}
              height={33}
            />
          </div>
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

      {/* Right side: nav items + auth */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
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
                backgroundColor: "transparent",
                border: "1px solid #172030",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor: "pointer",
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
