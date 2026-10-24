import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# GoalProof (گل‌پروف)

> GoalProof is a gamified goal-tracking app for Android. Users create goals, build daily streaks (3, 7, 14, 30 days) and unlock special medals (First Goal, Goal Done, Comeback, Morning Person, Night Owl, Premium). The UI is Persian-first with full RTL support and 19 color palettes.

## Pages
- [Persian landing page](${SITE.home}/fa)
- [English landing page](${SITE.home}/en)

## Download
- [GoalProof on Myket](${SITE.myket})

## Developer
- [More apps on Myket](${SITE.myketDev})
- [More apps on Cafe Bazaar](${SITE.bazaarDev})
- Support: ${SITE.email}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
