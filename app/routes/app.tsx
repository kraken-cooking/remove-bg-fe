import { ComparisonContainer } from "~/components/ComparisonContainer";
import { FloatingUploadCard } from "~/components/FloatingUploadCard";
import { Header } from "~/components/Header";
import { UploadCard } from "~/components/UploadCard";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <section
        style={{
          height: "calc(100vh - 72px)",
        }}
        className="bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto flex h-full items-center justify-between">
          <ComparisonContainer
            originalImage="/landing/before-image.jpg"
            bgRemovedImage="/landing/after-image.png"
          />
        </div>
        <FloatingUploadCard />
      </section>
    </div>
  );
}
