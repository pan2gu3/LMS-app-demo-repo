import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start learning your way.</div>
            <h2
                style={{
                    fontFamily: '"Fraunces", serif',
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "33px",
                    color: "#e2ddd6",
                    textAlign: "center",
                    padding: "0 24px",
                }}
            >
                Build &amp; Personalize Your Learning Companion
            </h2>
            <p
                style={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22.75px",
                    color: "#8e9bae",
                    textAlign: "center",
                    padding: "0 24px",
                }}
            >
                Pick a name, subject, voice &amp; personality — then learn through voice conversations that feel natural and fun.
            </p>
            <Image src="/images/cta.svg" alt="cta" width={280} height={180} />
            <Link href="/companions/new" className="w-auto">
                <button
                    style={{
                        backgroundColor: "#e8b847",
                        color: "#0b0f15",
                        borderRadius: "8px",
                        cursor: "pointer",
                        padding: "10px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: '"Syne", sans-serif',
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "0.35px",
                        border: "none",
                    }}
                >
                    <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                    Build a New Companion
                </button>
            </Link>
        </section>
    );
};

export default Cta;
