import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Terms of Use
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: January 2026
              </p>

              <div className="prose prose-lg max-w-none">
                <article className="space-y-8">
                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using the Hadin Kai Community – Coventry website, you accept 
                      and agree to be bound by these Terms of Use. If you do not agree to these terms, 
                      please do not use our website.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      2. Use of Website
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You agree to use this website only for lawful purposes and in a way that does 
                      not infringe the rights of others or restrict their use of the website. 
                      Prohibited conduct includes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Posting or transmitting unlawful, harmful, or offensive content</li>
                      <li>Attempting to gain unauthorized access to the website</li>
                      <li>Using the website for commercial purposes without permission</li>
                      <li>Interfering with the website's operation or security</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      3. Intellectual Property
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content on this website, including text, images, logos, and design elements, 
                      is the property of Hadin Kai Community – Coventry or its content providers and 
                      is protected by copyright and other intellectual property laws. You may not 
                      reproduce, distribute, or create derivative works without our express permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      4. Community Membership
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Membership in Hadin Kai Community is subject to approval by community leadership. 
                      Members agree to abide by community guidelines, respect traditional protocols, 
                      and contribute positively to community activities.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      5. Events and Activities
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Participation in community events is at your own risk. While we strive to ensure 
                      safe and welcoming environments, participants are responsible for their own safety 
                      and the supervision of their children during events.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      6. Donations
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All donations to Hadin Kai Community are voluntary and non-refundable. Donors 
                      may specify preferred use for their donations, though the community reserves 
                      the right to allocate funds as needed for community benefit.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      7. Disclaimer
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This website is provided "as is" without warranties of any kind. We do not 
                      guarantee the accuracy, completeness, or usefulness of any information on 
                      the website. We are not liable for any damages arising from your use of 
                      the website.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      8. Changes to Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these Terms of Use at any time. Changes will 
                      be effective immediately upon posting to the website. Your continued use of 
                      the website constitutes acceptance of any modifications.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      9. Contact Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms of Use, please contact us:
                    </p>
                    <div className="mt-4 p-4 rounded-lg bg-card border border-border">
                      <p className="text-foreground font-semibold">Hadin Kai Community – Coventry</p>
                      <p className="text-muted-foreground">Email: Hadinkai2024@gmail.com</p>
                      <p className="text-muted-foreground">Phone: +44 7564 499627</p>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
