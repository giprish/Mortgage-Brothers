export type FormKind = "preapproval" | "quiz" | "contact";

function isPreApprovalTarget(clickable: HTMLElement): boolean {
  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  const text = (clickable.textContent || "").toLowerCase().trim();
  const id = (clickable.id || "").toLowerCase().trim();

  if (id === "get-pre-approved" || id === "preapproval" || id === "pre-approval" || id === "get-started") return true;
  if (clickable.hasAttribute("data-preapproval") || clickable.hasAttribute("data-open-preapproval")) return true;

  if (
    href === "#get-pre-approved" ||
    href === "/#get-pre-approved" ||
    href.includes("#get-pre-approved") ||
    href.includes("get-pre-approved") ||
    href.includes("/loan-applications") ||
    href.includes("/pre-approval") ||
    href.includes("/preapproval") ||
    href.includes("get-started") ||
    href.includes("#get-in-touch") ||
    href.includes("/#get-in-touch")
  ) {
    return true;
  }

  if (text.length > 0 && text.length < 120) {
    if (
      text.includes("start my preapproval") ||
      text.includes("start my pre-approval") ||
      text.includes("start your pre-approval") ||
      text.includes("start your preapproval") ||
      text.includes("get pre-approved") ||
      text.includes("get preapproved") ||
      text.includes("get pre approved") ||
      text.includes("start pre-approval") ||
      text.includes("start preapproval") ||
      text.includes("get started today") ||
      text.includes("get started now") ||
      text.includes("get started") ||
      (text.includes("pre-approval") && (text.includes("start") || text.includes("get") || text.includes("apply"))) ||
      (text.includes("preapproval") && (text.includes("start") || text.includes("get") || text.includes("apply")))
    ) {
      return true;
    }
  }

  return false;
}

function isQuizTarget(clickable: HTMLElement): boolean {
  if (clickable.hasAttribute("data-quiz") || clickable.hasAttribute("data-open-quiz")) return true;

  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  return (
    href.includes("250305896122151") ||
    href.includes("form.jotform.com/250305896122151")
  );
}

function isContactTarget(clickable: HTMLElement): boolean {
  if (clickable.hasAttribute("data-contact") || clickable.hasAttribute("data-open-contact")) return true;

  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  return (
    href.includes("form.jotform.com/250026749097159") ||
    href.includes("jsform/250026749097159")
  );
}

export function resolveFormKind(element: Element | null): FormKind | null {
  if (!element) return null;
  const clickable = element.closest("a[href], button, [role='button']") as HTMLElement | null;
  if (!clickable) return null;

  if (clickable.hasAttribute("data-preapproval") || clickable.hasAttribute("data-open-preapproval")) {
    return "preapproval";
  }
  if (clickable.hasAttribute("data-quiz") || clickable.hasAttribute("data-open-quiz")) {
    return "quiz";
  }
  if (clickable.hasAttribute("data-contact") || clickable.hasAttribute("data-open-contact")) {
    return "contact";
  }

  if (isPreApprovalTarget(clickable)) return "preapproval";
  if (isQuizTarget(clickable)) return "quiz";
  if (isContactTarget(clickable)) return "contact";
  return null;
}
