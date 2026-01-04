import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: January 2026
              </p>

              <div className="prose prose-lg max-w-none">
                <article className="space-y-8">
                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      1. Introduction
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Hadin Kai Community – Coventry ("we", "our", or "us") is committed to protecting 
                      the privacy of our community members and website visitors. This Privacy Policy 
                      explains how we collect, use, and safeguard your personal information.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      2. Information We Collect
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Contact information (name, email address, phone number)</li>
                      <li>Membership details and family information</li>
                      <li>Event registration and attendance records</li>
                      <li>Donation and contribution records</li>
                      <li>Communications and correspondence with us</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      3. How We Use Your Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Your information is used for:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Managing community membership and communications</li>
                      <li>Organizing events and notifying you of community activities</li>
                      <li>Processing donations and maintaining financial records</li>
                      <li>Providing welfare support and community services</li>
                      <li>Improving our services and community programs</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      4. Data Protection
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate security measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. Access to 
                      personal data is limited to authorized community officials who need it for 
                      legitimate community purposes.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      5. Sharing of Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to 
                      outside parties. We may share information with trusted third parties who 
                      assist us in operating our community activities, provided they agree to keep 
                      this information confidential.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      6. Your Rights
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt out of marketing communications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      7. Contact Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy or wish to exercise your 
                      rights, please contact us at:
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

export default Privacy;
