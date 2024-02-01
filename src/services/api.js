const API_BASE_URL = "https://api.tvmaze.com";

export const fetchShows = async (page = 1) => {
  const response = await fetch(`${API_BASE_URL}/shows?page=${page}`);
  const data = await response.json();
  return data;
};

export const fetchShowDetails = async (showId) => {
  const response = await fetch(`${API_BASE_URL}/shows/${showId}`);
  const data = await response.json();
  return data;
};
