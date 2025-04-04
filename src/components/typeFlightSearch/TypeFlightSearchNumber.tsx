import {CustomImputDate} from '../Inputs/CustomImputDate';
import {CustomImputText} from '../Inputs/CustomImputText';
import {FlexView} from '../styles/styles';

export const TypeFlightSearchNumber = () => {
  return (
    <FlexView width="100%" justifyContent="space-between" direction="row">
      <CustomImputText
        title={'Flight number'}
        subt={'AM'}
        text={'500'}
        changeColor={false}
      />
      <CustomImputDate
        w="200px"
        title={'Date of departure'}
        text={'Tuesday, Nov  21'}
        changeColor={false}
        action={() => console.log('hi')}
      />
    </FlexView>
  );
};
