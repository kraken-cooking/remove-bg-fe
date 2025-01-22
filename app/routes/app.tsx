import { ComparisonContainer } from "~/components/ComparisonContainer";
import { FloatingUploadCard } from "~/components/FloatingUploadCard";
import { Header } from "~/components/Header";
import { UploadCard } from "~/components/UploadCard";
import { useDataStore } from "~/store";

export default function Index() {
  const selectedImage = useDataStore((state) => state.selectedImage);

  return (
    <div className="min-h-screen">
      <Header />
      <section
        style={{
          height: "calc(100vh - 72px)",
        }}
        className="bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="relative max-w-7xl mx-auto flex h-full items-center justify-between">
          {selectedImage ? (
            <>
              <div className="absolute top-4 space-x-2">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                  Download
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors duration-200">
                  Delete
                </button>
              </div>

              <ComparisonContainer />
            </>
          ) : (
            <UploadCard />
          )}
        </div>
        <FloatingUploadCard />
      </section>
    </div>
  );
}
