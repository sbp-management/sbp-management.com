import { CareerPage, careerMetadata } from "@/components/v2/career-page";

export const generateMetadata = () => careerMetadata("careerDoctorsPage");

export default function DoctorsPage() {
  return <CareerPage career="careerDoctorsPage" />;
}
