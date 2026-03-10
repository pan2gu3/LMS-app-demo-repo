import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col max-lg:items-center">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}
        </section>

        <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page
