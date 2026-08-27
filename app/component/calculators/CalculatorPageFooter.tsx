import CalculatorMidCta from "./CalculatorMidCta";
import ClosingCostChallengeGame from "./ClosingCostChallengeGame";
import ExploreCalculatorsGrid from "./ExploreCalculatorsGrid";
import GetInTouch from "../GetInTouch";
import { getCalculatorPageContentOrThrow } from "@/lib/calculatorPageContent";

type Props = {
  /** Stage route slug, e.g. `/refinance-calculator/` */
  path: string;
};

export default function CalculatorPageFooter({ path }: Props) {
  const { midCta, explore, contact } = getCalculatorPageContentOrThrow(path);
  const showClosingCostGame = path === "/home-purchase-closing-cost-calculator/";

  return (
    <>
      <CalculatorMidCta
        title={midCta.title}
        description={midCta.description}
        ctaLabel={midCta.ctaLabel}
        ctaHref={midCta.ctaHref}
      />
      {showClosingCostGame ? <ClosingCostChallengeGame /> : null}
      <ExploreCalculatorsGrid title={explore.title} intro={explore.intro} />
      <GetInTouch
        theme="light"
        showDivider
        title={contact.title}
        description={contact.description}
      />
    </>
  );
}
