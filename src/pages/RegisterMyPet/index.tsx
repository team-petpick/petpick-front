import Layout from '@components/layouts/Layout';
import Button from './components/button';

const RegisterMyPet = () => {
  return (
    <Layout footerVisible={false}>
      <div>RegisterMyPet</div>
      <Button buttonDirection={'next'} isActive={true} buttonName={'다음 활성화'} />
      <Button buttonDirection={'next'} isActive={false} buttonName={'다음 비활성화'} />
      <Button buttonDirection={'prev'} isActive={false} buttonName={'이전'} />
      <Button buttonDirection={'prev'} isActive={true} buttonName={'이전'} />
    </Layout>
  );
};

export default RegisterMyPet;
