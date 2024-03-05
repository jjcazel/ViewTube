export const fetchVideos = (search) => {
  const data = {};
  if (search && search.search !== "") {
    Object.assign(data, search);
  }

  return $.ajax({
    method: "GET",
    url: "/api/videos",
    data,
  });
};

export const fetchVideo = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/videos/${id}`,
  });

export const addView = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/videos/${id}/views`,
  });
};

export const addLikeOrDislike = (data) => {
  const id = data.videoId;
  const is_dislike = {
    like: { is_dislike: data.isDislike },
  };

  return $.ajax({
    method: "POST",
    url: `/api/videos/${id}/likes`,
    data: is_dislike,
  });
};

export const createVideo = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/videos`,
    data: data,
    contentType: false,
    processData: false,
  });
};
