export const metadata = {
  title: "Stránka nenalezena",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Stránka nenalezena</h1>
        <p className="text-lg text-gray-600">
          Omlouvám se, ale tato stránka neexistuje.
        </p>
      </div>
    </div>
  );
}
