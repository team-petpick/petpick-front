import { getImageItem } from '@apis/image';
import * as S from '../styles/ProductImage.style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductImage = () => {
  const { productId } = useParams<Record<string, string>>();
  const [productImgUrl, setProductImgUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (!productId) {
          setError('Product ID가 없습니다.');
          return;
        }
        // API 호출하여 이미지 데이터 가져오기
        const images = await getImageItem(Number(productId));
        console.log('API 응답 데이터:', images); // API 응답 확인

        // 조건에 맞는 이미지 필터링 (descImgStatus가 0인 이미지)
        const targetImage = images.find((image: any) => image.descImgStatus === 0);

        // 조건에 맞는 이미지가 있으면 URL을 상태로 설정
        if (targetImage) {
          setProductImgUrl(targetImage.productImgUrl);
        } else {
          setError('해당 조건의 이미지를 찾을 수 없습니다.');
        }
      } catch (err) {
        console.error('이미지를 불러오는 중 오류 발생:', err);
        setError('이미지를 불러오는 중 오류가 발생했습니다.');
      }
    };
    fetchImage();
  }, [productId]);

  if (error) return <p>{error}</p>;
  if (!productImgUrl) return <p>이미지를 불러오는 중입니다...</p>;

  return (
    <S.ProductImageContainer>
      <S.ProductImage src={productImgUrl} />
    </S.ProductImageContainer>
  );
};
