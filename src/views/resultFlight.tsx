import {Text, View} from 'react-native';
import {
  Container,
  ContainerCard,
  CustomText,
  FlexView,
  RouteInfo,
  RouteText,
  Subtitle,
  Title,
} from '../components/styles/styles';

export const ResultFlight = () => {
  return (
    <Container>
      <FlexView direction="row" justifyContent="space-between">
        <View>
          <Title>A</Title>
        </View>
        <View>
          <CustomText
            fontSize="32px"
            fontWeight="700"
            textAlign="right"
            lineHeight="32px">
            AM 500
          </CustomText>
          <CustomText
            fontSize="16px"
            fontWeight="400"
            textAlign="right"
            lineHeight="20px">
            Tuesday, Nov 21 | H Change
          </CustomText>
        </View>
      </FlexView>

      <FlexView direction="row" justifyContent="space-between">
        <View>
          <CustomText fontSize="14px" fontWeight="600" lineHeight="20px">
            Mexico City to Cancún
          </CustomText>
        </View>
        <View>
          <CustomText
            fontSize="14px"
            fontWeight="400"
            color="#00000080"
            lineHeight="20px">
            4 results
          </CustomText>
        </View>
      </FlexView>
      <ContainerCard>
        <FlexView
            width="80px"
            height="28px"
            backgroundColor='black'
            justifyContent='center'
            alignItems='center'
            borderBottomEndRadius= "18px"
            borderTopLeftRadius= "20px" >
          <CustomText fontSize="11px"fontWeight="600"lineHeight="20px"color="white">
            Arrived
          </CustomText>
        </FlexView>

        <View style={{flex: 3, justifyContent: 'center'}}>
          <FlexView direction="row" justifyContent="space-between" padding="0px 15px">
            <View>
              <CustomText fontSize="22px" fontWeight="600" lineHeight="22px">
                AM 500
              </CustomText>
            </View>
            <View>
              <Text>-------------------</Text>
            </View>
            <View>
              <CustomText fontSize="22px" fontWeight="600" lineHeight="22px">
                AM 500
              </CustomText>
            </View>
          </FlexView>

          <FlexView direction="row" justifyContent="space-between" padding="0px 15px">
            <View>
              <CustomText fontSize="14px" fontWeight="400" lineHeight="22px">
                MEX
              </CustomText>
            </View>
            <View>
              <CustomText fontSize="10px"fontWeight="600"lineHeight="22px"color="#00000066">
                2h 28m
              </CustomText>
            </View>
            <View>
              <CustomText fontSize="14px" fontWeight="400" lineHeight="22px">
                CUN
              </CustomText>
            </View>
          </FlexView>
        </View>

        <RouteInfo>
          <FlexView
            direction="row"justifyContent="space-between"padding="0px 15px" >
            <View>
              <CustomText fontSize="12px" fontWeight="600" lineHeight="20px" >
                AM 500
              </CustomText>
            </View>
            <View>
              <CustomText fontSize="12px"fontWeight="400" marginTop="-1px"
                color="#00000080"
                lineHeight="25px">
                Details
              </CustomText>
            </View>
          </FlexView>
        </RouteInfo>
      </ContainerCard>
    </Container>
  );
};
