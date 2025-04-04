import React, {useState} from 'react';
import {
  Container,
  CustomText,
  FlexView,
  SearchButton,
  SearchButtonText,
  StyledInput,
  TabButton,
  Tabs,
  TabText,
} from '../components/styles/styles';
import {View} from 'react-native';
import {TypeFlightSearchNumber} from '../components/typeFlightSearch/TypeFlightSearchNumber';
import {TypeFlightSearchDestination} from '../components/typeFlightSearch/TypeFlightSearchDestination';
import {Foother} from '../components/footer/Foother';

export const SearchFlight = () => {
  const [activeTab, setActiveTab] = useState<'flight' | 'destination'>(
    'flight',
  );

  return (
    <View style={{flex: 1}}>
      <FlexView
        height="200px"
        width="100%"
        justifyContent="center"
        backgroundColor="#F7F7F7"
        alignItems="center">
        <CustomText
          fontSize="26px"
          fontWeight="700"
          textAlign="right"
          lineHeight="32px">
          Track your flight
        </CustomText>
        <CustomText
          fontSize="16px"
          fontWeight="400"
          textAlign="right"
          color="#000000"
          lineHeight="22px">
          Keep you informed in real time!
        </CustomText>
      </FlexView>
      <Container>
        <FlexView width="280px" alignSelf="center" marginBottom="25px">
          <Tabs>
            <TabButton
              active={activeTab === 'flight'}
              onPress={() => setActiveTab('flight')}>
              <TabText active={activeTab === 'flight'}>Flight Number</TabText>
            </TabButton>
            <TabButton
              active={activeTab === 'destination'}
              onPress={() => setActiveTab('destination')}>
              <TabText active={activeTab === 'destination'}>
                Destination
              </TabText>
            </TabButton>
          </Tabs>
        </FlexView>

        {activeTab === 'destination' ? (
          <TypeFlightSearchDestination />
        ) : (
          <TypeFlightSearchNumber />
        )}
        <SearchButton>
          <SearchButtonText>Search Flight</SearchButtonText>
        </SearchButton>

        {activeTab === 'destination' ? (
          <Foother
            text={'Looking for a specific flight? Try searching by'}
            textLink={'flight number'}
            w="220px"
          />
        ) : (
          <Foother
            text={'Can’t find your flight number? Try searching by'}
            textLink={'destination'}
          />
        )}
      </Container>
    </View>
  );
};
