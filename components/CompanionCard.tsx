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

// Subject-specific accent colors from Figma
const subjectAccentMap: Record<string, { border: string; badgeBg: string; badgeText: string; iconBg: string }> = {
  science: {
    border: "#a78bfa",
    badgeBg: "rgba(167, 139, 250, 0.13)",
    badgeText: "#a78bfa",
    iconBg: "rgba(167, 139, 250, 0.13)",
  },
  maths: {
    border: "#fbbf24",
    badgeBg: "rgba(251, 191, 36, 0.09)",
    badgeText: "#fbbf24",
    iconBg: "rgba(251, 191, 36, 0.13)",
  },
};

const defaultAccent = {
  border: "#a78bfa",
  badgeBg: "rgba(167, 139, 250, 0.13)",
  badgeText: "#a78bfa",
  iconBg: "rgba(167, 139, 250, 0.13)",
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
  const accent = subjectAccentMap[subject?.toLowerCase()] ?? defaultAccent;

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
        borderLeft: `3px solid ${accent.border}`,
        borderTop: `1px solid ${accent.border}`,
        borderRight: `1px solid ${accent.border}`,
        borderBottom: `1px solid ${accent.border}`,
      }}
    >
      {/* Top row: subject badge + bookmark */}
      <div className="flex justify-between items-center pr-6">
        <div
          className="subject-badge"
          style={{
            backgroundColor: accent.badgeBg,
            color: accent.badgeText,
            border: `1px solid ${accent.border}`,
          }}
        >
          {subject}
        </div>
        <button
          className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          onClick={handleBookmark}
        >
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={13}
            height={15}
          />
        </button>
      </div>

      {/* Name */}
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
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
          fontFamily: "'Syne', sans-serif",
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
            fontFamily: "'Syne', sans-serif",
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

      {/* Launch Lesson button */}
      <Link href={`/companions/${id}`} className="w-full pr-6">
        <button
          className="btn-primary w-full justify-center"
          style={{
            backgroundColor: "#182030",
            border: "1px solid #1f2e44",
          }}
        >
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
