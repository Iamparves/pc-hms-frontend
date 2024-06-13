import ScrollToTop from "@/components/shared/ScrollToTop";

const TermsOfUse = () => {
  return (
    <main>
      <ScrollToTop />
      <div className="bg-[url(/terms.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="bg-black/80 py-16 text-center text-white sm:py-20 lg:py-24">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Terms of Use</h1>
          <p className="text-[15px] text-gray-200 sm:text-base lg:text-lg">
            Last update: Jun 13, 2024
          </p>
        </div>
      </div>
      <div className="container py-12 md:py-16">
        <div className="privacy-policy mx-auto max-w-4xl">
          <div>
            <h3>Introduction</h3>
            <p>
              Welcome to Patientoo! These Terms of Use govern your use of our
              website and services. By accessing or using our site, you agree to
              comply with and be bound by these terms. If you do not agree with
              any part of these terms, you must not use our services.
            </p>
          </div>
          <div>
            <h3>Use of Our Services</h3>
            <ol>
              <li>
                <span>Eligibility:</span> You must be at least 18 years old to
                use our services. By using our site, you represent and warrant
                that you meet this age requirement.
              </li>
              <li>
                <span>Account Registration:</span> You may be required to create
                an account to access certain features. You agree to provide
                accurate and complete information and to keep your account
                information updated.
              </li>
              <li>
                <span>User Responsibilities:</span> You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. You agree to
                notify us immediately of any unauthorized use of your account.
              </li>
            </ol>
          </div>
          <div>
            <h3>Prohibited Activities</h3>
            <p>You agree not to engage in any of the following activities:</p>
            <ul>
              <li>Violating any applicable laws or regulations.</li>
              <li>
                Posting or transmitting any material that is unlawful, harmful,
                defamatory, obscene, or otherwise objectionable.
              </li>
              <li>
                Using our services to harm minors or impersonate any person or
                entity.
              </li>
              <li>
                Interfering with the operation of our website or services,
                including through unauthorized access or transmission of
                viruses.
              </li>
              <li>
                Collecting or harvesting personal information from other users
                without their consent.
              </li>
            </ul>
          </div>
          <div>
            <h3>Intellectual Property</h3>
            <p>
              All content on our website, including text, graphics, logos, and
              software, is the property of Patientoo or its licensors and is
              protected by intellectual property laws. You may not use,
              reproduce, or distribute any content without our prior written
              permission.
            </p>
          </div>
          <div>
            <h3>Termination</h3>
            <p>
              We reserve the right to terminate or suspend your account and
              access to our services at our sole discretion, without notice, for
              conduct that we believe violates these Terms of Use or is harmful
              to other users or our business interests.
            </p>
          </div>
          <div>
            <h3>Disclaimer of Warranties</h3>
            <p>
              Our services are provided on an "as-is" and "as-available" basis.
              We make no warranties, express or implied, regarding the
              availability, accuracy, or reliability of our services. We
              disclaim all warranties, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
          </div>
          <div>
            <h3>Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Patientoo shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising out of or in connection with your use of our
              services, even if we have been advised of the possibility of such
              damages. Our total liability to you for any claims arising from
              your use of our services shall not exceed the amount paid by you,
              if any, for accessing our services.
            </p>
          </div>
          <div>
            <h3>Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless Patientoo, its
              affiliates, and their respective officers, directors, employees,
              and agents from and against any claims, liabilities, damages,
              losses, and expenses, including reasonable attorneys' fees,
              arising out of or in any way connected with your use of our
              services or violation of these Terms of Use.
            </p>
          </div>
          <div>
            <h3>Governing Law</h3>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of [Your Country/State], without regard
              to its conflict of law principles. You agree to submit to the
              exclusive jurisdiction of the courts located in [Your
              Country/State] for the resolution of any disputes arising out of
              or relating to these terms or your use of our services.
            </p>
          </div>
          <div>
            <h3>Changes to These Terms</h3>
            <p>
              We may update these Terms of Use from time to time. We will notify
              you of any changes by posting the new Terms of Use on our website
              and updating the "Last Updated" date at the top. Your continued
              use of our services after any changes constitutes your acceptance
              of the new terms.
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:contact@patientoo.com">contact@patientoo.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
