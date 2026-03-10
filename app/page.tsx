import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#0b0f15" }}
    >
      <div
        style={{
          paddingTop: "40px",
          paddingLeft: "56px",
          paddingRight: "0px",
          paddingBottom: "0px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          maxWidth: "1400px",
        }}
      >
        {/* Heading */}
        <div style={{ height: "45px", display: "flex", alignItems: "center" }}>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: "30px",
              lineHeight: "45px",
              letterSpacing: "-0.6px",
              color: "#e2ddd6",
              margin: 0,
            }}
          >
            Popular Companions
          </h1>
        </div>

        {/* Companions Cards Section */}
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))}
        </section>

        {/* Bottom Section: Recent Sessions + CTA */}
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          <CompanionsList
            title="Recently completed sessions"
            companions={recentSessionsCompanions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </div>
    </main>
  );
};

export default Page;
