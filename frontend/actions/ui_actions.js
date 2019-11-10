
export const UPDATE_SEARCH_FIELD = "UPDATE_SEARCH_FIELD";
export const SPACE_TO_PLAY = "SPACE_TO_PLAY";

export const updateSearchField = search => {
  return {
    type: UPDATE_SEARCH_FIELD,
    search,
  };
};

export const spaceToPlay = boolean => {
  return {
    type: SPACE_TO_PLAY,
    spaceToPlay: boolean,
  };
};