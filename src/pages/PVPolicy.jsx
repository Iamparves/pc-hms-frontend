import ScrollToTop from "@/components/shared/ScrollToTop";

const PVPolicy = () => {
  return (
    <main>
      <ScrollToTop />
      <div className="bg-[url(/privacy.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="bg-black/80 py-16 text-center text-white sm:py-20 lg:py-24">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-gray-200 sm:text-base lg:text-lg">
            Last update: June 13, 2024
          </p>
        </div>
      </div>
      <div className="container py-12 md:py-16">
        <div className="privacy-policy mx-auto max-w-4xl">
          <div>
            <h3>Introduction</h3>
            <p>
              Welcome to Patientoo! We value your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              our practices regarding the collection, use, and sharing of your
              information when you use our website and services.
            </p>
          </div>
          <div>
            <h3>Information We Collect</h3>
            <p>
              We collect various types of information in order to provide and
              improve our services:
            </p>
            <ul>
              <li>
                <span>Personal Information:</span> This includes your name,
                email address, phone number, age, gender, address, and other
                identifying information you provide when you register or update
                your profile.
              </li>
              <li>
                <span>Medical Information:</span> Details about your health,
                medical history, and appointments.
              </li>
              <li>
                <span>Usage Data:</span> Information about how you interact with
                our website and services, such as IP addresses, browser types,
                pages visited, and time spent on our site.
              </li>
              <li>
                <span>Cookies and Tracking Technologies:</span> We use cookies
                to track your activity on our website and hold certain
                information.
              </li>
            </ul>
          </div>
          <div>
            <h3>How We Use Your Information</h3>
            <p>
              We use the collected information for various purposes, including:
            </p>
            <ul>
              <li>To provide and maintain our services.</li>
              <li>To manage your account and provide customer support.</li>
              <li>
                To send you notifications about your appointments and updates.
              </li>
              <li>
                To improve our website and services based on your feedback.
              </li>
              <li>To comply with legal obligations and protect your data.</li>
            </ul>
          </div>
          <div>
            <h3>Sharing Your Information</h3>
            <p>
              We do not sell your personal information. We may share your
              information with third parties in the following circumstances:
            </p>
            <ul>
              <li>
                <span>Service Providers:</span> We may share your information
                with third-party vendors who help us operate our website and
                services.
              </li>
              <li>
                <span>Legal Requirements:</span> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
              <li>
                <span>Business Transfers:</span> In the event of a merger,
                acquisition, or asset sale, your personal information may be
                transferred.
              </li>
            </ul>
          </div>
          <div>
            <h3>Security of Your Information</h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, use,
              or disclosure. However, no method of transmission over the
              Internet or electronic storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>
          </div>
          <div>
            <h3>Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on our
              website and updating the "Last Updated" date at the top. We
              encourage you to review this Privacy Policy periodically for any
              changes.
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
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

export default PVPolicy;
