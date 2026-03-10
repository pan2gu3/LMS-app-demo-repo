import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(160deg, #190f00 0%, #111720 60%)",
        border: "1px solid #2d2200",
        borderRadius: "12px",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 1 0",
        minWidth: "280px",
      }}
    >
      {/* Badge */}
      <div
        style={{
          backgroundColor: "rgba(232, 184, 71, 0.12)",
          border: "1px solid #e8b847",
          borderRadius: "6px",
          padding: "3.2px 9.6px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "10.4px",
            lineHeight: "15.6px",
            letterSpacing: "1.248px",
            textTransform: "uppercase",
            color: "#e8b847",
          }}
        >
          Start learning your way.
        </span>
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "33px",
          color: "#e2ddd6",
          margin: 0,
          textAlign: "center",
        }}
      >
        Build &amp; Personalize Your Learning Companion
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22.75px",
          color: "#8e9bae",
          margin: 0,
          textAlign: "center",
        }}
      >
        Pick a name, subject, voice &amp; personality — then learn through voice
        conversations that feel natural and fun.
      </p>

      {/* Illustration */}
      <Image
        src="/images/cta.svg"
        alt="cta"
        width={362}
        height={232}
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {/* CTA Button */}
      <Link href="/companions/new" style={{ width: "100%" }}>
        <button
          style={{
            width: "100%",
            backgroundColor: "#e8b847",
            border: "none",
            borderRadius: "8px",
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer",
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
              color: "#0b0f15",
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
