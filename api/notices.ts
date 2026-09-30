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

    const notices = data.map((notice: any) => ({
      id: String(
        notice.id ??
          notice.ID ??
          notice.Date ??
          notice.date ??
          "",
      ),
      date: notice.Date ?? notice.date ?? "",
      category:
        notice.Category ??
        notice.category ??
        "General",
      title: notice.Title ?? notice.title ?? "",
      description:
        notice.Description ??
        notice.description ??
        "",
      link: notice.Link ?? notice.link ?? "",
    }));

    res.status(200).json(notices);
  } catch (error) {
    console.error("Notice API error:", error);

    res.status(500).json({
      error: "Failed to load notices",
    });
  }
}