import { CareerPage, careerMetadata } from "@/components/v2/career-page";

export const generateMetadata = () => careerMetadata("careerMedtechPage");

export default function MedicalTechnicalStaffPage() {
  return <CareerPage career="careerMedtechPage" />;
}
