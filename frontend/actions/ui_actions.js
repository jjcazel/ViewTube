
export const UPDATE_SEARCH_FIELD = "UPDATE_SEARCH_FIELD";
export const SPACE_TO_PLAY = "SPACE_TO_PLAY";
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";
export const EXPAND_SIDEBAR = "EXPAND_SIDEBAR";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

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

export const collapseSidebar = () => {
  return { type: COLLAPSE_SIDEBAR, };
};

export const expandSidebar = () => {
  return { type: EXPAND_SIDEBAR, };
};

export const openModal = () => {
  return { type: OPEN_MODAL, };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL, };
};