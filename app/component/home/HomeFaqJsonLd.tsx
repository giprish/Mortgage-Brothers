import JsonLd from "@/app/component/JsonLd";
import { buildFaqPageSchema, normalizeFaqs } from "@/lib/seo/structured-data";
import { homeFaqs } from "./homeFaqs";

export default function HomeFaqJsonLd() {
  const schema = buildFaqPageSchema(
    normalizeFaqs(
      homeFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
    ),
  );

  if (!schema) return null;
  return <JsonLd data={schema} />;
}
