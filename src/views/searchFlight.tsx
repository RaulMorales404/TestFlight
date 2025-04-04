import React, { useState } from "react";
import { 

  Container, DateInput, DateText,  FooterText,  InputWrapper, 
   LinkText, 
   SearchButton, SearchButtonText,  StyledInput, Subtitle, TabButton, Tabs, TabText, TimeText, Title 
} from "../components/styles/styles";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';


export const SearchFlight = () => {
  
  const [activeTab, setActiveTab] = useState<'flight' | 'destination'>('flight');
  const [flightNumber, setFlightNumber] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);


  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <Container>
      <Title>Track your flight</Title>
      <Subtitle>Keep you informed in real time!</Subtitle>

      <Tabs>
        <TabButton active={activeTab === 'flight'} onPress={() => setActiveTab('flight')}>
          <TabText active={activeTab === 'flight'}>Flight Number</TabText>
        </TabButton>
        <TabButton active={activeTab === 'destination'} onPress={() => setActiveTab('destination')}>
          <TabText active={activeTab === 'destination'}>Destination</TabText>
        </TabButton>
      </Tabs>

      <InputWrapper>
        <StyledInput
          placeholder="Flight number"
          value={flightNumber}
          onChangeText={setFlightNumber}
        />
        <DateInput onPress={() => setShowDatePicker(true)}>
          <DateText>
            {date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
          </DateText>
        </DateInput>
      </InputWrapper>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
       <SearchButton>
          <SearchButtonText>Search Flight</SearchButtonText>
        </SearchButton>

        <FooterText>
        Can’t find your flight number?{' '}
        <LinkText>Try searching by destination</LinkText>
      </FooterText>




    </Container>
  );
};
