import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./Terms.scss";

const Terms = () => {
  return (
    <>
      <Header isContactPage={true} />
      <section className="terms">
        <div className="container">
          <h2>Terms and Conditions for ERP System Usage</h2>

          <div className="terms__inner">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your access
              to and use of the Marine ERP (Enterprise Resource Planning) system
              (&quot;the System&quot;) provided by Ex2 Team (&quot;the
              Provider&quot;). By accessing or using the System, you agree to be
              bound by these Terms. If you do not agree to these Terms, you may
              not access or use the System.
            </p>
            <div className="terms__list">
              <h5>1. License and Access</h5>
              <p>
                1.1. Subject to these Terms, the Provider grants you a limited,
                non-exclusive, non-transferable license to access and use the
                System for your internal business purposes.
              </p>
              <p>
                1.2. You agree not to sublicense, sell, resell, or otherwise
                exploit the System for any commercial purpose without the
                express written consent of the Provider.
              </p>
              <p>
                1.3. The Provider reserves the right to modify, suspend, or
                discontinue the System (or any part thereof) at any time without
                notice.
              </p>
            </div>

            <div className="terms__list">
              <h5>2. User Accounts</h5>
              <p>
                2.1. You must provide accurate and complete information when
                creating a user account for the System.
              </p>
              <p>
                2.2. You are responsible for maintaining the security of your
                account and password. The Provider cannot and will not be liable
                for any loss or damage from your failure to comply with this
                security obligation.
              </p>
              <p>
                2.3. You agree to immediately notify the Provider of any
                unauthorized use of your account or any other breach of
                security.
              </p>
            </div>

            <div className="terms__list">
              <h5>3. Data Privacy</h5>
              <p>
                3.1. The Provider respects your privacy and complies with
                applicable data protection laws and regulations.
              </p>
              <p>
                3.2. You agree to provide consent for the Provider to collect,
                process, and store your data as necessary for the provision of
                the System and as outlined in the Provider&apos;s Privacy
                Policy.
              </p>
              <p>
                3.3. The Provider will not disclose your data to third parties
                except as required by law or with your consent.
              </p>
            </div>

            <div className="terms__list">
              <h5>4. Intellectual Property</h5>
              <p>
                4.1. The System, including all intellectual property rights
                therein, is and shall remain the exclusive property of the
                Provider.
              </p>
              <p>
                4.2. You agree not to modify, adapt, translate, reverse
                engineer, decompile, disassemble, or create derivative works
                based on the System.
              </p>
            </div>

            <div className="terms__list">
              <h5>5. Limitation of Liability</h5>
              <p>
                5.1. To the fullest extent permitted by law, the Provider shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses, resulting
                from (i) your access to or use of or inability to access or use
                the System; (ii) any conduct or content of any third party on
                the System; or (iii) unauthorized access, use, or alteration of
                your transmissions or content.
              </p>
              <p>
                5.2. In no event shall the aggregate liability of the Provider
                exceed the greater of one hundred dollars ($100) or the amount
                you paid the Provider, if any, in the past six months for the
                System giving rise to the claim.
              </p>
            </div>

            <div className="terms__list">
              <h5>6. Governing Law</h5>
              <p>
                6.1. These Terms shall be governed by and construed in
                accordance with the laws of Germany, without regard to its
                conflict of law principles.
              </p>
            </div>

            <div className="terms__list">
              <h5>7. Changes to Terms</h5>
              <p>
                7.1. The Provider reserves the right to modify or replace these
                Terms at any time. If a revision is material, the Provider will
                provide at least 30 days&apos; notice prior to any new terms
                taking effect.
              </p>
              <p>
                7.2. Your continued use of the System after the effective date
                of any revised Terms constitutes your acceptance of the revised
                Terms.
              </p>
            </div>

            <div className="terms__list">
              <h5>8. Termination</h5>
              <p>
                8.1. The Provider may terminate your access to the System
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach these
                Terms.
              </p>
              <p>
                8.2. Upon termination, your right to use the System will
                immediately cease, and you must cease all use of the System.
              </p>
            </div>
            <p>
              By accessing or using the System, you acknowledge that you have
              read, understood, and agree to be bound by these Terms. If you do
              not agree to these Terms, you may not access or use the System.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;
