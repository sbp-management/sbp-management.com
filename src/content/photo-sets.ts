import { PHOTO_FILES, type PhotoKey } from "./photos";

/**
 * Photos grouped by subject. A section with more than one matching photo shows them as a
 * slideshow (components/v2/photo-slideshow.tsx); alt texts come from the dictionary (photos.alt).
 */
export const PHOTO_SETS = {
  /** Service area: Healthcare Project Management – planning, coordination, documentation. */
  projectManagement: [
    "clinicItTeam",
    "doctorNotes",
    "keyboardDocumentation",
    "clinicalDocumentation",
  ],
  /** Service area: Hospital & Process Optimization – clinical workflows on the ward. */
  processOptimization: [
    "nursePatientMonitor",
    "infusionCare",
    "anesthesiaWorkstation",
    "icuMonitor",
  ],
  /** Service area: Sterile Supply – instruments and their preparation. */
  sterileSupply: [
    "surgicalInstruments",
    "surgicalInstrumentsGloves",
    "nurseInstrumentPreparation",
    "surgeryInstrumentsHands",
    "servicesSterileSupply",
  ],
  /** Medical Technology & Surgical Instruments – laboratory, diagnostics, precision manufacturing. */
  medicalTechnology: [
    "microscopeLab",
    "labTechnicianInstruments",
    "laboratoryTeam",
    "precisionMachining",
    "xRay",
    "ecgElectrodes",
    "ecgGraphic",
  ],
  /** Service area: Education & Competence Development – training in practice. */
  education: [
    "operatingTeam",
    "educationSterileSupplyVisit",
    "instrumentsTrainingSet",
    "masokWorkshop",
    "masokMechatronicsLab",
  ],
  /** Workforce Solutions – medical professionals. */
  workforce: [
    "medicalTeamCorridor",
    "doctorStethoscope",
    "stethoscopeHands",
    "stethoscopeExamination",
    "nursePatientCare",
  ],
  /** Hospital and process projects in Germany – partnership, teams and wards. */
  germanyHospitals: [
    "medicalTeamCorridor",
    "nursePatientMonitor",
    "clinicItTeam",
    "infusionCare",
  ],
  /** Career in Germany – the fields candidates work in: nursing, paediatrics, elderly care, therapy. */
  careers: [
    "nurseTablet",
    "childExamination",
    "elderlyCareWalker",
    "newbornCare",
    "physiotherapyKnee",
    "elderlyCareBedside",
    "childTeddyStethoscope",
    "childrenCareOutdoors",
    "elderlyCareHands",
    "maternityCare",
    "physiotherapyBand",
  ],
  /** About – "From Germany to international projects": ministries in Serbia. */
  aboutMinistries: [
    "sbpMinistryEconomy",
    "sbpMinistryTeam",
    "sbpMinistryVisit",
    "sbpMinistryDelegation",
    "sbpMinistryMeeting",
  ],
  /** About – the City of Leskovac and partner companies. */
  aboutPartners: [
    "sbpLeskovacCityMeeting",
    "sbpLeskovacCityTalks",
    "sbpAsanusVisit",
    "sbpPartnerDinner",
  ],
  /** MASOK – the academy, its workshops and the campus. */
  masokCampus: [
    "masokCampusGroup",
    "masokWorkshop",
    "masokMechatronicsLab",
    "masokWorkshop2",
    "masokSchoolVisit",
    "masokCampusVisit",
    "masokLeskovacCity",
  ],
  /** MASOK – agreements and partners. */
  masokAgreements: [
    "masokHandshake",
    "masokSigning",
    "masokAgreementDocuments",
    "masokPartnerGroup",
    "masokPartnersSelfie",
  ],
  /** MASOK – meetings and visits. */
  masokMeetings: [
    "masokMeeting",
    "masokPartnerMeeting",
    "masokMeetingOffice",
    "masokMeetingTeam",
    "masokMfaBuergerhospitalMeeting",
    "masokSterileSupplyVisit",
  ],
  /** Projects overview – agreements. */
  projectsAgreements: ["projectsSigning", "masokHandshake", "masokSigning"],
  /** Projects overview – the places. */
  projectsPlaces: ["masokLeskovacCity", "masokCampusGroup", "masokCampusVisit"],
  /** Projects overview – practice. */
  projectsPractice: [
    "masokWorkshop",
    "projectWorkshopHall",
    "projectSterileSupplyVisit",
  ],
  /** For Hospitals & Institutions – the Bürgerhospital Frankfurt. */
  hospitals: ["hospitalsBuergerhospital", "masokMfaBuergerhospitalMeeting"],
} as const satisfies Record<string, readonly PhotoKey[]>;

export type PhotoSet = keyof typeof PHOTO_SETS;

/** The photos of a set with their translated alt texts. */
export function photoSet(set: PhotoSet, alt: Readonly<Record<string, string>>) {
return PHOTO_SETS[set].map((key) => ({ ...PHOTO_FILES[key], alt: alt[key] ?? "" }));
}
