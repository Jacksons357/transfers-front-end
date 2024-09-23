import ProfileForm from "@/components/login/profile-form";
import ProfileHeader from "@/components/login/profile-header";

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
