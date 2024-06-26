import axios from 'axios';

interface TruecallerProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

interface TruecallerError {
  code: number;
  message: string;
}

const TRUECALLER_API_URL = 'https://api.truecaller.com/v1/verify';
const YOUR_PACKAGE_ID = 'your.package.id';
const YOUR_API_KEY = 'RlI9Ucfde97b3c5014018848ab57a3b6f4918';

export const getTruecallerProfile = async (phoneNumber: string): Promise<TruecallerProfile | TruecallerError> => {
  try {
    const response = await axios.post(TRUECALLER_API_URL, {
      phoneNumber,
      // packageId: YOUR_PACKAGE_ID,
      apiKey: YOUR_API_KEY,
    });
    return response.data;
  } catch (error) {
    return {
      code: 400,
      message: "error.response.data.message",
    };
  }
};
