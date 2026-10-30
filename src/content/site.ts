/** Company contact details, shared by every language of the site. */
export const company = {
  name: "SBP Management",
  phone: "+49 (0)30 437 46 351",
  phoneHref: "tel:+493043746351",
  email: "info@sbp-management.com",
  emailHref: "mailto:info@sbp-management.com",
  feedbackEmail: "feedback@sbp-management.com",
  address: ["Grußdorfstraße 3a", "13507 Berlin DE"],
  /** Same profiles as in the email signature; shown as plain links in the footer. */
  social: [
    {
      label: "LinkedIn",
      href: "https://de.linkedin.com/company/sbp-management-und-personalberatung",
    },
    { label: "Instagram", href: "https://www.instagram.com/sbp_management/" },
    { label: "Facebook", href: "https://www.facebook.com/p/SBP-Management/" },
  ],
} as const;
