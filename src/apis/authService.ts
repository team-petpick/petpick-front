import axios from 'axios';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const secretKey = import.meta.VITE_APP_TOSS_SECRET_KEY;
const encodedSecretKey = btoa(`${secretKey}:`);

const tossApi = axios.create({
  baseURL: 'https://api.tosspayments.com/v1',
  headers: {
    Authorization: `Basic ${encodedSecretKey}`,
  },
});

export const fetchPaymentWidget = async (variantKey = 'DEFAULT') => {
  try {
    const response = await tossApi.get(
      `/payment-widget/widget-groups/keys?variantKey=${variantKey}`,
    );
    return { data: response.data, clientKey };
  } catch (error) {
    console.error('Error fetching payment widget:', error);
    throw error;
  }
};
