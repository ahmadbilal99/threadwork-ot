// Sends contact/booking forms to VITE_FORM_ENDPOINT (Formspree, Basin, or your own API).
// With no endpoint configured, it runs in demo mode and simulates success.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export async function submitForm(type, data) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("[demo mode] form not sent:", { type, ...data });
    return { ok: true, simulated: true };
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ type, ...data }),
  });

  if (!response.ok) {
    throw new Error("The form could not be sent. Please try again or call us.");
  }
  return { ok: true, simulated: false };
}
