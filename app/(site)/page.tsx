import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventify - Internal portal",
};

export default function Home() {
  return (
    <main>
        <h1>Welcome to Eventify</h1>
        <p>Eventify is an internal portal for managing events.</p>
    </main>
  );
}
