import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <Section>
          <Container>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Pioneering the future of enterprise AI.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
