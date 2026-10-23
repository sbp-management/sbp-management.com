import {
  ServiceAreaPage,
  serviceAreaMetadata,
} from "@/components/v2/service-area-page";

export const generateMetadata = () => serviceAreaMetadata("svcSterilePage");

export default function SterileSupplyMedicalTechnologyPage() {
  return <ServiceAreaPage area="svcSterilePage" />;
}
