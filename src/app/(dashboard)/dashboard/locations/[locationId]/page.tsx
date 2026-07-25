import { notFound } from "next/navigation";
import { LocationDetailScreen } from "@/components/dashboard/locations/detail/LocationDetailScreen";
import { locationDetails } from "@/components/dashboard/locations/detail/data";

type LocationDetailPageProps = {
  params: Promise<{ locationId: string }>;
};

export function generateStaticParams() {
  return Object.keys(locationDetails).map((locationId) => ({ locationId }));
}

export default async function LocationDetailPage({ params }: LocationDetailPageProps) {
  const { locationId } = await params;
  const location = locationDetails[locationId];

  if (!location) {
    notFound();
  }

  return <LocationDetailScreen location={location} />;
}
