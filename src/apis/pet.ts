import { TProductType } from '@types';
import { IMyPetInfo } from '@types';
import instance from './instance';
import { AxiosError } from 'axios';

const transformImage = async (image: string) => {
  const imageTransformed = await fetch(image);
  const blob = await imageTransformed.blob();

  const fileType = blob.type.split('/')[1];
  return { blob, fileType };
};

export const postPetInfo = async (petInfo: IMyPetInfo) => {
  const formData = new FormData();

  const { blob, fileType } = await transformImage(petInfo.petImg as string);

  formData.append('petImg', blob, `petImg.${fileType}`);
  formData.append('petName', petInfo.petName as string);
  formData.append('petSpecies', petInfo.petSpecies as string);
  formData.append('petKind', petInfo.petKind as TProductType);
  formData.append('petAge', petInfo.petAge?.toString() || '');

  const response = await instance.post('/pets', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return response;
};

export const putPetInfo = async (petInfo: IMyPetInfo) => {
  const formData = new FormData();

  formData.append('petName', petInfo.petName as string);
  formData.append('petSpecies', petInfo.petSpecies as string);
  formData.append('petKind', petInfo.petKind as TProductType);
  formData.append('petAge', petInfo.petAge?.toString() || '');
  if (petInfo.petImg?.slice(0, 4) !== 'http') {
    const { blob, fileType } = await transformImage(petInfo.petImg as string);
    console.log('blob', blob);
    formData.append('petImg', blob, `petImg.${fileType}`);
  } else {
    formData.append('petImg', petInfo.petImg as string);
  }
  const response = await instance.put(`/pets`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return response.data;
};

export const putPetImageInfo = async (petInfo: IMyPetInfo) => {
  const formData = new FormData();

  const imageTransformed = await fetch(petInfo.petImg as string);
  const blob = await imageTransformed.blob();

  const fileType = blob.type.split('/')[1];

  formData.append('petImg', blob, `petImg.${fileType}`);
  console.log('form', formData);

  const petId = localStorage.getItem('petId');
  const response = await instance.put(`/pets/${petId}/image`, formData, {
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

export const deletePetInfo = async () => {
  const response = await instance.delete(`/pets`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  if (response.status === 200) {
    alert('삭제되었습니다.');
    localStorage.removeItem('petId');
    return response;
  } else {
    throw new Error('반려동물 정보를 삭제하는데 실패했습니다.');
  }
};
