import { ProductType } from '@types';
import { IMyPetInfo } from '@types';
import instance from './instance';
import { AxiosError } from 'axios';

export const postPetInfo = async (petInfo: IMyPetInfo) => {
  const formData = new FormData();

  const imageTransformed = await fetch(petInfo.petImg as string);
  const blob = await imageTransformed.blob();

  const fileType = blob.type.split('/')[1];

  formData.append('petImg', blob, `petImg.${fileType}`);

  formData.append('petName', petInfo.petName as string);
  formData.append('petSpecies', petInfo.petSpecies as string);
  formData.append('petKind', petInfo.petKind as ProductType);
  formData.append('petAge', petInfo.petAge?.toString() || '');
  formData.append('userId', '1');
  console.log('form', formData);

  const response = await instance.post('/pets', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return response;
};

export const getPetInfo = async () => {
  try {
    const response = await instance.get(`/pets`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      throw new Error('조회 가능한 반려동물이 없습니다.');
    } else {
      throw new Error('데이터를 불러오는 데 실패했습니다.');
    }
  }
};
