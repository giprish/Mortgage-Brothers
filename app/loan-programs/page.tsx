import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import MortgageLoanProgramsArizonaPage from "../mortgage-loan-programs-arizona/page";

export const metadata: Metadata = getSeoMetadata("/loan-programs/");

export default MortgageLoanProgramsArizonaPage;
