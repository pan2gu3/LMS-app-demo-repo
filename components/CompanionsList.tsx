import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {cn, getSubjectColor} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2
                style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "#e2ddd6",
                    marginBottom: "16px",
                }}
            >
                {title}
            </h2>

            <Table>
                <TableHeader>
                    <TableRow
                        style={{ borderBottom: "1px solid #172030" }}
                    >
                        <TableHead
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#475668",
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
                                color: "#475668",
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
                                color: "#475668",
                            }}
                            className="text-right"
                        >
                            Duration
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({id, subject, name, topic, duration}) => (
                        <TableRow
                            key={id}
                            style={{ borderBottom: "1px solid #172030" }}
                        >
                            <TableCell>
                                <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden flex-shrink-0"
                                            style={{ backgroundColor: getSubjectColor(subject) }}
                                        >
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={35}
                                                height={35}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p
                                                style={{
                                                    fontFamily: "'Fraunces', serif",
                                                    fontWeight: 600,
                                                    fontSize: "18px",
                                                    lineHeight: "24px",
                                                    color: "#e2ddd6",
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
                                                }}
                                            >
                                                {topic}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div
                                    className="subject-badge w-fit max-md:hidden"
                                    style={{
                                        backgroundColor: `${getSubjectColor(subject)}22`,
                                        color: getSubjectColor(subject),
                                        border: `1px solid ${getSubjectColor(subject)}`,
                                    }}
                                >
                                    {subject}
                                </div>
                                <div
                                    className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                                    style={{ backgroundColor: getSubjectColor(subject) }}
                                >
                                    <Image
                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={18}
                                        height={18}
                                    />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 w-full justify-end">
                                    <p
                                        style={{
                                            fontFamily: "'Syne', sans-serif",
                                            fontWeight: 500,
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            letterSpacing: "0.3px",
                                            color: "#475668",
                                        }}
                                    >
                                        {duration}{' '}
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
                    ))}
                </TableBody>
            </Table>
        </article>
    );
};

export default CompanionsList;
