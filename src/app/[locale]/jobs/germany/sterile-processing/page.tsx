import { CareerPage, careerMetadata } from "@/components/v2/career-page";

export const generateMetadata = () => careerMetadata("careerSterilePage");

export default function SterileProcessingPage() {
  return <CareerPage career="careerSterilePage" />;
}
