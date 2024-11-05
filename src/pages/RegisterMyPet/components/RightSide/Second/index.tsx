import * as S from '../../../styles/registerMyPetFirst.style';
import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';

interface ISecondProps {
  setIsNextButtonActive: (value: boolean) => void;
}

const Second = ({ setIsNextButtonActive }: ISecondProps) => {
  const { myPetInfo, setMyPetInfo } = useMyPetInfoStore();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyPetInfo({ imageSrc: reader.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      alert('PNG 또는 JPG 파일만 업로드할 수 있습니다.');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setMyPetInfo({ petName: value });
      setIsNextButtonActive(value.length > 0);
    }
  };

  return (
    <S.SecondComponentWrapper>
      <div>
        <S.Title>우리 아이 사진을 등록해주세요</S.Title>
        <S.InputWrapper>
          <S.ImageWrapper>
            {myPetInfo.imageSrc ? <S.Image src={myPetInfo.imageSrc} alt="미리보기" /> : null}
          </S.ImageWrapper>
          <S.UploadButton htmlFor="fileUpload">사진 등록하기</S.UploadButton>{' '}
          <S.FileInput
            id="fileUpload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
        </S.InputWrapper>
      </div>
      <div>
        <S.Title>
          우리 아이 이름을 입력해주세요 <S.RequiredMark>*</S.RequiredMark>
        </S.Title>
        <S.NameInput
          value={myPetInfo.petName || ''}
          onChange={handleNameChange}
          placeholder="1~10자 이내로 입력해주세요"
        />
      </div>
    </S.SecondComponentWrapper>
  );
};

export default Second;
