export default function Contact() {
    return (
      <div className="flex flex-col items-center p-8 sm:p-20">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center sm:text-left max-w-prose">
          Feel free to reach out to us at{" "}
          <a
            href="mailto:support@myapp.com"
            className="text-blue-600 hover:underline"
          >
            support@myapp.com
          </a>
          .
        </p>
      </div>
    );
  }
  