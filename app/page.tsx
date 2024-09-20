import ProfileForm from "@/components/profile-form";
import ProfileHeader from "@/components/profile-header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ProfileHeader />

      <section className="flex-grow flex justify-center items-center">
        <ProfileForm />
      </section>

    </main>
  );
}
