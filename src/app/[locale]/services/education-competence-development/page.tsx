import {
  ServiceAreaPage,
  serviceAreaMetadata,
} from "@/components/v2/service-area-page";

export const generateMetadata = () => serviceAreaMetadata("svcEducationPage");

export default function EducationCompetenceDevelopmentPage() {
  return <ServiceAreaPage area="svcEducationPage" />;
}
