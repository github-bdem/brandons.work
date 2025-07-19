import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Generate mailto link with form data
    const generateMailtoLink = () => {
        const to = "bison_roost.9v@icloud.com";

        // Create subject line
        const subjectText = formData.subject
            ? `${formData.subject} - Contact from ${formData.name}`
            : `Contact from ${formData.name}`;

        // Create email body
        const bodyText = `
Hi Brandon,

${formData.message}

---
Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.subject || "Not specified"}

Sent from brandons.work contact form
        `.trim();

        // Encode the subject and body for URL
        const encodedSubject = encodeURIComponent(subjectText);
        const encodedBody = encodeURIComponent(bodyText);

        return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
    };

    // Check if required fields are filled
    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    return (
        <div className="card mx-auto max-w-2xl p-8">
            <div className="mb-8">
                <h3 className="text-primary mb-2 text-2xl font-bold">
                    GET IN TOUCH
                </h3>
                <p className="project-description">
                    {`Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.`}
                </p>
            </div>

            <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="form-field">
                        <label htmlFor="name" className="form-label">
                            NAME *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email" className="form-label">
                            EMAIL *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className="form-field">
                    <label htmlFor="subject" className="form-label">
                        PROJECT TYPE
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Frontend Consulting">
                            Frontend Consulting
                        </option>
                        <option value="Team Leadership">Team Leadership</option>
                        <option value="Architecture Review">
                            Architecture Review
                        </option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div className="form-field">
                    <label htmlFor="message" className="form-label">
                        MESSAGE *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="form-textarea"
                        placeholder="Tell me about your project, timeline, and requirements..."
                    />
                </div>

                {/* Technical divider */}
                <div className="technical-divider"></div>

                {/* Submit section */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex items-center gap-3">
                        <div
                            className={`technical-indicator ${isFormValid ? "active" : ""}`}
                        ></div>
                        <span className="text-neutral font-mono text-xs">
                            {isFormValid
                                ? "READY.TO.SEND"
                                : "COMPLETE.REQUIRED.FIELDS"}
                        </span>
                    </div>

                    <a
                        href={generateMailtoLink()}
                        className={`btn btn-primary ${!isFormValid ? "pointer-events-none opacity-50" : ""}`}
                        aria-disabled={!isFormValid}
                    >
                        SEND MESSAGE
                    </a>
                </div>

                {/* Info message */}
                <div
                    className="form-status"
                    style={{
                        borderColor: "var(--color-technical-blue)",
                        background: "rgba(59, 130, 246, 0.05)",
                        color: "var(--color-technical-blue)",
                    }}
                >
                    <div className="flex items-center gap-2">
                        <div
                            className="technical-indicator"
                            style={{
                                background: "var(--color-technical-blue)",
                            }}
                        ></div>
                        <span className="font-semibold">
                            Email client integration
                        </span>
                    </div>
                    <p className="text-neutral mt-1 text-sm">
                        {`Clicking "Send Message" will open your default email
                        client with the message pre-filled.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
