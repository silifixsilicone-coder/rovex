export interface FounderProfile {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
}

export const DEFAULT_FOUNDER_PROFILE: FounderProfile = {
  name: "Pramod Raut",
  title: "Founder & CEO, ROVEX Studio",
  bio: "Entrepreneur & Builder creating businesses across manufacturing, software and artificial intelligence.",
  photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
};

const LOCAL_STORAGE_KEY = "rovex_founder_profile_v1";

export function getStoredFounderProfile(): FounderProfile {
  if (typeof window === "undefined") return DEFAULT_FOUNDER_PROFILE;
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === "object") {
        return {
          name: parsed.name || DEFAULT_FOUNDER_PROFILE.name,
          title: parsed.title || DEFAULT_FOUNDER_PROFILE.title,
          bio: parsed.bio || DEFAULT_FOUNDER_PROFILE.bio,
          photoUrl: parsed.photoUrl || DEFAULT_FOUNDER_PROFILE.photoUrl,
        };
      }
    }
  } catch (e) {
    console.error("Error reading Founder Profile from localStorage", e);
  }
  return DEFAULT_FOUNDER_PROFILE;
}

export function saveStoredFounderProfile(profile: FounderProfile) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
    window.dispatchEvent(new Event("rovex_founder_updated"));
  } catch (e) {
    console.error("Error saving Founder Profile to localStorage", e);
  }
}
