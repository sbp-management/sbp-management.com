import {
  ServiceAreaPage,
  serviceAreaMetadata,
} from "@/components/v2/service-area-page";

export const generateMetadata = () => serviceAreaMetadata("svcProjectPage");

export default function HealthcareProjectManagementPage() {
  return <ServiceAreaPage area="svcProjectPage" />;
}
