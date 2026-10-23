import {
  ServiceAreaPage,
  serviceAreaMetadata,
} from "@/components/v2/service-area-page";

export const generateMetadata = () => serviceAreaMetadata("svcProcessPage");

export default function HospitalProcessOptimizationPage() {
  return <ServiceAreaPage area="svcProcessPage" />;
}
