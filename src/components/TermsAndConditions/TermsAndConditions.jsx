import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-left">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

      <section className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          By using this website, you agree to the following terms and
          conditions. If you do not agree, please do not use the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Intellectual Property
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          All content on this website is owned by us. You may view and print
          content for personal use only. You may not republish, sell, or
          duplicate any material without our permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. User Comments
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are not responsible for user comments posted on this website. We
          reserve the right to monitor and remove inappropriate comments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. Limitation of Liability
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are not liable for any damages arising from your use of this
          website, including loss of data or profits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          4. Governing Law
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          These terms are governed by the laws of [Your Country], and any
          disputes will be resolved in courts within that jurisdiction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Changes to Terms
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We may update these terms periodically. Continued use of the website
          means you accept any changes.
        </p>
      </section>

      <footer className="text-gray-600 mt-8">
        Last updated on [Insert Date].
      </footer>
    </div>
  );
};

export default TermsAndConditions;
