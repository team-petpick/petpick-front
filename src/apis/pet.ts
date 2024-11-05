import { ProductType } from '@types';
import { IMyPetInfo } from '@types';
import instance from './instance';

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
