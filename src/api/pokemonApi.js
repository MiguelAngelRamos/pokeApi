import { API_HOST } from "../utils/constants";

export const getPokemonApi = async (endPointUrl) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offet=0`;
    const response = await fetch( endPointUrl || url );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export const getPokemonDetailByIdApi = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }

}