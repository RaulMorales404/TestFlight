import {Text, View} from 'react-native';
import {ContainerTextInput, CustomText, FlexView} from '../styles/styles';

interface Props {
  title: string;
  subt: string;
  text: string;
  changeColor: boolean;
  w?: string;
}

export const CustomImputText = ({
  title="Flight number",
  subt="AM",
  text="500",
  w = '130px',
  changeColor = false,
}: Props) => {
  return (
    <ContainerTextInput
      height="60px"
      width={w}
      borderWidth="2px"
      borderRadius="10px"
      padding="15px"
      marginBottom="15px"
      borderColor="#000">
      <View>
        <CustomText
          fontSize="10px"
          fontWeight="400"
          color="#000000"
          lineHeight="10px">
          {title}
        </CustomText>
        <FlexView direction="row">
          <CustomText
            fontSize="16px"
            fontWeight="600"
            color={changeColor?"#000000":"#0000004D"}
            marginRight="10px"
            lineHeight="18px">
            {subt}
          </CustomText>
          <CustomText
            fontSize="16px"
            fontWeight="600"
            color={changeColor?"#0000004D":"#000000"}
            lineHeight="18px">
            {text}
          </CustomText>
        </FlexView>
      </View>
    </ContainerTextInput>
  );
};
