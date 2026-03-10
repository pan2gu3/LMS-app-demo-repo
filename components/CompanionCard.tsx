"use client";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
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

// Returns subject-specific accent color from Figma tokens
const getAccentColor = (subject: string): string => {
  const colors: Record<string, string> = {
    science: "#a78bfa",
    maths: "#fbbf24",
    math: "#fbbf24",
    history: "#f97316",
    english: "#34d399",
    coding: "#60a5fa",
    language: "#f472b6",
  };
  return colors[subject?.toLowerCase()] ?? "#a78bfa";
};

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
  const accentColor = getAccentColor(subject);

  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };

  return (
    <article
      className="companion-card"
      style={{
        borderLeft: `3px solid ${accentColor}`,
        borderTop: `1px solid ${accentColor}`,
        borderRight: `1px solid ${accentColor}`,
        borderBottom: `1px solid ${accentColor}`,
      }}
    >
      {/* Header row: badge + bookmark */}
      <div className="flex justify-between items-center pr-6">
        <div
          className="subject-badge"
          style={{
            backgroundColor: `${accentColor}21`,
            color: accentColor,
          }}
        >
          {subject}
        </div>
        <button className="companion-bookmark" onClick={handleBookmark}>
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      {/* Name */}
      <h2
        style={{
          fontFamily: '"Fraunces", serif',
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "27.5px",
          color: "#e2ddd6",
        }}
      >
        {name}
      </h2>

      {/* Topic */}
      <p
        style={{
          fontFamily: '"Syne", sans-serif',
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22.75px",
          color: "#8e9bae",
        }}
      >
        {topic}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p
          style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.3px",
            color: "#475668",
          }}
        >
          {duration} min
        </p>
      </div>

      {/* Launch button */}
      <Link href={`/companions/${id}`} className="w-full pr-6">
        <button
          className="w-full flex items-center justify-center gap-2"
          style={{
            backgroundColor: accentColor === "#fbbf24" ? "rgba(251, 191, 36, 0.09)" : "#182030",
            border: `1px solid ${accentColor}`,
            borderRadius: "8px",
            padding: "8px 16px",
            cursor: "pointer",
            fontFamily: '"Syne", sans-serif',
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "21px",
            letterSpacing: "0.35px",
            color: accentColor,
          }}
        >
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
