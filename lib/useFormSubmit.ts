import { useState } from "react";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/4c92aabc747010c3262ae49be4187d2f";

export function useFormSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Submission failed");
      return { success: true };
    } catch {
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
}
