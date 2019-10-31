export const RECENT_UPLOAD_UI = "RECENT_UPLOAD_UI";

export const recentUploadUI = payload => {
  return {
    type: RECENT_UPLOAD_UI,
    videoId: Object.keys(payload.videos)[0],
  };
};