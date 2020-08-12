import axios from 'axios';

export const xmlRequestApi = (url) => {
	fetch(url)
  .then(response => response.text())
  .then(str => {
		console.log(str)
		return new window.DOMParser().parseFromString(str, "text/xml")}
		)
  .then(data => data);
};

export const getCurrencyApi = async (url) => {
	const result = await axios.get(url);
	return result.data;
};

