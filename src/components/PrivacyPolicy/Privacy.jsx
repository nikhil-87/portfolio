import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-left">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information when you use our
          website and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Information We Collect
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We may collect personal information such as your name, email address,
          and any other details you provide when you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Sign up for our services or create an account on our website.</li>
          <li>Contact us for support or inquiries.</li>
          <li>Participate in surveys or promotions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We use your information to provide, maintain, and improve our
          services. This includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Processing transactions and managing your account.</li>
          <li>Responding to your inquiries and providing customer support.</li>
          <li>Sending you updates, promotions, and important notifications.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How We Protect Your Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We implement various security measures to protect your personal
          information from unauthorized access, use, or disclosure. These
          include encryption, secure servers, and regular security reviews.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sharing Your Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties, except when required by law or with your explicit
          consent. We may share your information with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Trusted third-party service providers who assist us in operating our
            website and services.
          </li>
          <li>Law enforcement or government agencies when required by law.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Rights
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Access and update your personal information.</li>
          <li>Request the deletion of your personal data.</li>
          <li>Opt-out of receiving promotional communications.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          To exercise any of these rights, please contact us at
          [your.email@example.com].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We may update this privacy policy from time to time. Any changes will
          be posted on this page, and we encourage you to review this policy
          periodically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          If you have any questions or concerns about this privacy policy,
          please contact us at [your.email@example.com].
        </p>
      </section>

      <footer className="text-gray-600 mt-8">
        Last updated on [Insert Date].
      </footer>
    </div>
  );
};

export default Privacy;
