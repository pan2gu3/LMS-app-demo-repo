import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
  return (
    <article
      className={cn(classNames)}
      style={{
        backgroundColor: "#111720",
        borderRadius: "12px",
        border: "1px solid #172030",
        padding: "29px 33px 1px 33px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "32px",
          color: "#e2ddd6",
          margin: 0,
        }}
      >
        {title}
      </h2>

      <Table>
        <TableHeader>
          <TableRow
            style={{
              borderBottom: "1px solid #172030",
            }}
          >
            <TableHead
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#8e9bae",
              }}
              className="w-2/3"
            >
              Lessons
            </TableHead>
            <TableHead
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#8e9bae",
              }}
            >
              Subject
            </TableHead>
            <TableHead
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#8e9bae",
                textAlign: "right",
              }}
            >
              Duration
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration }) => {
            const subjectColor = getSubjectColor(subject);
            return (
              <TableRow
                key={id}
                style={{
                  borderBottom: "1px solid #172030",
                }}
              >
                {/* Lesson name + topic */}
                <TableCell style={{ padding: "16px 0" }}>
                  <Link href={`/companions/${id}`}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {/* Subject icon box */}
                      <div
                        className="max-md:hidden"
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "8px",
                          backgroundColor: subjectColor
                            ? `${subjectColor}21`
                            : "#1a1a2e",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={35}
                          height={35}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p
                          style={{
                            fontFamily: "'Fraunces', serif",
                            fontWeight: 600,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#e2ddd6",
                            margin: 0,
                          }}
                        >
                          {name}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "22.75px",
                            color: "#8e9bae",
                            margin: 0,
                          }}
                        >
                          {topic}
                        </p>
                      </div>
                    </div>
                  </Link>
                </TableCell>

                {/* Subject badge */}
                <TableCell style={{ padding: "16px 0" }}>
                  {/* Desktop: text badge */}
                  <div
                    className="max-md:hidden"
                    style={{
                      backgroundColor: subjectColor ? `${subjectColor}21` : "#1a1a2e",
                      border: `1px solid ${subjectColor}`,
                      borderRadius: "6px",
                      padding: "3.2px 9.6px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "fit-content",
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
                        color: subjectColor,
                      }}
                    >
                      {subject}
                    </span>
                  </div>
                  {/* Mobile: icon only */}
                  <div
                    className="md:hidden"
                    style={{
                      backgroundColor: subjectColor ? `${subjectColor}21` : "#1a1a2e",
                      borderRadius: "8px",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "fit-content",
                    }}
                  >
                    <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={18}
                      height={18}
                    />
                  </div>
                </TableCell>

                {/* Duration */}
                <TableCell style={{ padding: "16px 0", textAlign: "right" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}>
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
                      {duration}{" "}
                      <span className="max-md:hidden">mins</span>
                    </p>
                    <Image
                      src="/icons/clock.svg"
                      alt="minutes"
                      width={14}
                      height={14}
                      className="md:hidden"
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
