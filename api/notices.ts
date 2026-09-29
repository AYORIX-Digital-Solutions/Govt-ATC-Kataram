const API_URL =
  "https://script.google.com/macros/s/AKfycbw2zmxTQ6A-efi2_JNbEdHGUYlsOUTTpezwBZ3J0QBKEG5ZrpaQay9HHqY9HeKR2ZSWYA/exec";

export default async function handler(
  req: any,
  res: any,
) {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Google Apps Script returned ${response.status}`,
      );
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Notice API error:", error);

    res.status(500).json({
      error: "Failed to load notices",
    });
  }
}