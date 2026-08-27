import ExploreCalculatorsGrid from "./ExploreCalculatorsGrid";
import GetInTouch from "../GetInTouch";
import { getCalculatorPageContentOrThrow } from "@/lib/calculatorPageContent";

type Props = {
  /** Stage route slug, e.g. `/refinance-calculator/` */
  path: string;
};

export default function CalculatorPageFooter({ path }: Props) {
  const { explore, contact } = getCalculatorPageContentOrThrow(path);
  return (
    <>
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
