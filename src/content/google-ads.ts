/**
 * Google Ads conversion measurement. The values come from Google Ads (Ziele → Conversions → the
 * conversion action → Tag einrichten → "Google-Tag selbst installieren"): the Conversion ID
 * ("AW-…") and the action's conversion label. They are not secret: the tag shows them in every
 * page's source anyway. While `id` is empty, the Ads tag never loads and the cookie banner shows no
 * marketing switch. Only a sent Schnellbewerbung counts as a conversion, and only with marketing consent.
 */
export const googleAds = {
  id: "",
  labels: {
    schnellbewerbung: "",
  },
};
