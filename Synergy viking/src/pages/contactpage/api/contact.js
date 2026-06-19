// api/contact.js

/**
 * Submits contact form data to a Google Form.
 * @param {Object} formData - { firstname, lastname, email, phone,location, message }
 * @returns {{ ok: boolean, error?: any }}
 */
export const submitContactForm = async (formData) => {
    const url =
        "https://docs.google.com/forms/d/e/1FAIpQLSeygW29QE1BNaOVtm6JjZuaJhPGjNBXqVa0uKi-fufR6cH_og/formResponse";
    const params = new URLSearchParams();
    params.append("entry.1786097328", formData.firstname);    // ← replace ID
    params.append("entry.1439183340", formData.lastname);
    params.append("entry.54020006", formData.email);   // ← replace ID
    params.append("entry.146314172", formData.location);
    params.append("entry.1865119585", formData.phone);   // ← replace ID
    params.append("entry.111876148", formData.message); // ← replace ID

    try {
        await fetch(url, {
            method: "POST",
            mode: "no-cors",
            body: params,
        });
        return { ok: true };
    } catch (error) {
        console.error("Contact form submission error:", error);
        return { ok: false, error };
    }
};