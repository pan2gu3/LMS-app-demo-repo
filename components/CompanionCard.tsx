"use client";
import { removeBookmark, addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname();

  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };

  // Border color matches the subject accent color
  const borderColor = color;

  return (
    <article
      style={{
        backgroundColor: "#111720",
        borderRadius: "12px",
        // top:1px right:1px bottom:1px left:3px stroke
        borderTop: `1px solid ${borderColor}`,
        borderRight: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        borderLeft: `3px solid ${borderColor}`,
        padding: "24px 0px 24px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "410px",
        minWidth: "280px",
        flex: "1 1 280px",
        maxWidth: "410px",
        boxSizing: "border-box",
      }}
    >
      {/* Top row: subject badge + bookmark */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "24px" }}>
        {/* Subject badge */}
        <div
          style={{
            backgroundColor: `${color}21`, // ~13% opacity
            border: `1px solid ${color}`,
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
              fontSize: "9.92px",
              lineHeight: "14.88px",
              letterSpacing: "0.992px",
              textTransform: "uppercase",
              color: color,
            }}
          >
            {subject}
          </span>
        </div>

        {/* Bookmark button */}
        <button
          onClick={handleBookmark}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      {/* Companion name */}
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "27.5px",
          color: "#e2ddd6",
          margin: 0,
          paddingRight: "24px",
        }}
      >
        {name}
      </h2>

      {/* Topic */}
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22.75px",
          color: "#8e9bae",
          margin: 0,
          paddingRight: "24px",
        }}
      >
        {topic}
      </p>

      {/* Duration */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.3px",
            color: "#475668",
            margin: 0,
          }}
        >
          {duration} min
        </p>
      </div>

      {/* Launch Lesson button */}
      <Link href={`/companions/${id}`} style={{ paddingRight: "24px" }}>
        <button
          style={{
            width: "100%",
            backgroundColor: "#182030",
            border: "1px solid #1f2e44",
            borderRadius: "8px",
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "0.35px",
              color: "#e2ddd6",
            }}
          >
            Launch Lesson
          </span>
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
