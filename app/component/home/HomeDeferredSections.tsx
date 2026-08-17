"use client";

import LazyWhenVisible from "./LazyWhenVisible";

const loadReviews = () => import("../Reviews");
const loadHomeCalculator = () => import("./HomeCalculator");
const loadPreApprovedForm = () => import("../PreApprovedForm");
const loadDreamHomeCta = () => import("./DreamHomeCta");
const loadBrokersAdvocate = () => import("./BrokersAdvocate");
const loadBrothers = () => import("../Brothers");
const loadRecognition = () => import("./Recognition");
const loadHomeownershipSteps = () => import("./HomeownershipSteps");
const loadLoanPrograms = () => import("../LoanPrograms");
const loadCreditQuizCta = () => import("./CreditQuizCta");
const loadHomeFaq = () => import("./HomeFaq");
const loadHomeBlog = () => import("./HomeBlog");
const loadHomeContact = () => import("./HomeContact");
const loadFooter = () => import("../Footer");

export function DeferredReviews() {
  return <LazyWhenVisible minHeight={320} load={loadReviews} />;
}

export function DeferredHomeCalculator() {
  return <LazyWhenVisible minHeight={480} load={loadHomeCalculator} />;
}

export function DeferredPreApprovedForm() {
  return <LazyWhenVisible minHeight={360} load={loadPreApprovedForm} />;
}

export function DeferredDreamHomeCta() {
  return <LazyWhenVisible minHeight={520} load={loadDreamHomeCta} />;
}

export function DeferredBrokersAdvocate() {
  return <LazyWhenVisible minHeight={640} load={loadBrokersAdvocate} />;
}

export function DeferredBrothers() {
  return <LazyWhenVisible minHeight={720} load={loadBrothers} />;
}

export function DeferredRecognition() {
  return <LazyWhenVisible minHeight={360} load={loadRecognition} />;
}

export function DeferredHomeownershipSteps() {
  return <LazyWhenVisible minHeight={520} load={loadHomeownershipSteps} />;
}

export function DeferredLoanPrograms() {
  return <LazyWhenVisible minHeight={900} load={loadLoanPrograms} />;
}

export function DeferredCreditQuizCta() {
  return <LazyWhenVisible minHeight={280} load={loadCreditQuizCta} />;
}

export function DeferredHomeFaq() {
  return <LazyWhenVisible minHeight={640} load={loadHomeFaq} />;
}

export function DeferredHomeBlog() {
  return <LazyWhenVisible minHeight={720} load={loadHomeBlog} />;
}

export function DeferredHomeContact() {
  return <LazyWhenVisible minHeight={360} load={loadHomeContact} />;
}

export function DeferredFooter() {
  return <LazyWhenVisible minHeight={720} load={loadFooter} />;
}
