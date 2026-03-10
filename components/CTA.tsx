import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start learning your way.</div>
            <h2
                style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "33px",
                    color: "#e2ddd6",
                }}
            >
                Build &amp; Personalize Your Learning Companion
            </h2>
            <p
                style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22.75px",
                    color: "#8e9bae",
                }}
            >
                Pick a name, subject, voice &amp; personality — then learn through voice conversations that feel natural and fun.
            </p>
            <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
            <Link href="/companions/new" className="w-full">
                <button
                    className="btn-primary w-full justify-center"
                    style={{
                        backgroundColor: "#182030",
                        border: "1px solid #1f2e44",
                    }}
                >
                    <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                    <span
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 700,
                            fontSize: "14px",
                            lineHeight: "21px",
                            letterSpacing: "0.35px",
                        }}
                    >
                        Build a New Companion
                    </span>
                </button>
            </Link>
        </section>
    );
};

export default Cta;
