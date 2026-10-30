import { CareerPage, careerMetadata } from "@/components/v2/career-page";

export const generateMetadata = () => careerMetadata("careerNursesPage");

export default function NursesPage() {
  return <CareerPage career="careerNursesPage" />;
}
