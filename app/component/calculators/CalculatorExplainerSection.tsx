import CalculatorExplainer from "./CalculatorExplainer";
import { getCalculatorPageContentOrThrow } from "@/lib/calculatorPageContent";

type Props = {
  /** Stage route slug, e.g. `/refinance-calculator/` */
  path: string;
};

export default function CalculatorExplainerSection({ path }: Props) {
  const { explainer } = getCalculatorPageContentOrThrow(path);
  return (
    <CalculatorExplainer
      title={explainer.title}
      paragraphs={explainer.paragraphs}
      features={explainer.features}
    />
  );
}
