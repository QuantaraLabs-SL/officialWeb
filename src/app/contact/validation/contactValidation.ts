export interface ContactFormData {
  name: string;
  email: string;
  business: string;
  type: string;
  otherDetails?: string;
  challenge: string;
  method: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export const VALID_BUSINESS_TYPES = [
  "Retail",
  "Logistics",
  "Manufacturing",
  "Services",
  "Other",
] as const;

export const VALID_CONTACT_METHODS = ["Email", "WhatsApp"] as const;

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  // Validate Name
  const trimmedName = data.name?.trim() || "";
  if (!trimmedName) {
    errors.name = "Full name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Full name must be at least 2 characters long.";
  }

  // Validate Email
  const trimmedEmail = data.email?.trim() || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  // Validate Business Name
  const trimmedBusiness = data.business?.trim() || "";
  if (!trimmedBusiness) {
    errors.business = "Business name is required.";
  } else if (trimmedBusiness.length < 2) {
    errors.business = "Business name must be at least 2 characters long.";
  }

  // Validate Business Type
  if (!data.type) {
    errors.type = "Please select a business type / industry.";
  } else if (!VALID_BUSINESS_TYPES.includes(data.type as typeof VALID_BUSINESS_TYPES[number])) {
    errors.type = "Please select a valid business type.";
  }

  // Validate Other Details (required if type === 'Other')
  if (data.type === "Other") {
    const trimmedOther = data.otherDetails?.trim() || "";
    if (!trimmedOther) {
      errors.otherDetails = "Please specify your business or industry.";
    } else if (trimmedOther.length < 3) {
      errors.otherDetails = "Please provide more details (at least 3 characters).";
    }
  }

  // Validate Challenge
  const trimmedChallenge = data.challenge?.trim() || "";
  if (!trimmedChallenge) {
    errors.challenge = "Please describe your main operational challenge.";
  } else if (trimmedChallenge.length < 10) {
    errors.challenge = "Please provide more details (at least 10 characters).";
  }

  // Validate Preferred Contact Method
  if (!data.method) {
    errors.method = "Please select a preferred contact method.";
  } else if (!VALID_CONTACT_METHODS.includes(data.method as typeof VALID_CONTACT_METHODS[number])) {
    errors.method = "Please select a valid contact method.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
