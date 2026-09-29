import ReviewHome from "@/components/home-review/ReviewHome";
import { reviewMetadata } from "@/components/home-review/metadata";

export const metadata = reviewMetadata("light2");

export default function Page() {
  return <ReviewHome theme="light2" />;
}
