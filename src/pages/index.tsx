import ResourceSelector from '../components/Homepage/ResourceSelector';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <section className="flex flex-col items-center py-16">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2">Chill Schooling</h1>
        <p className="text-xl text-green-700 mb-8">Learn, Chill, Excel - Your Ultimate Educational Companion</p>
        <ResourceSelector />
      </section>
    </main>
  );
}
