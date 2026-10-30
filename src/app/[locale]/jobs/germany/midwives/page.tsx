import { CareerPage, careerMetadata } from "@/components/v2/career-page";

export const generateMetadata = () => careerMetadata("careerMidwivesPage");

export default function MidwivesPage() {
  return <CareerPage career="careerMidwivesPage" />;
}
