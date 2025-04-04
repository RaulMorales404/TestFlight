import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { ContainerTextInput, CustomText, FlexView } from '../styles/styles';
import { IconCalendar } from '../../assets/icons';

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface Props {
  action: () => void;
  title: string;
  text: string;
  changeColor: boolean;
  w?: string;
}

export const CustomImputDate = ({
  title = 'Flight number',
  action,
  text = '500',
  w = '130px',
  changeColor = false,
}: Props) => {
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  // Maneja el cambio de la fecha
  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate); 
    }
  };


  const handleShowDatePicker = () => {
    setShowDatePicker(true); // Habilita el DateTimePicker
  };

  return (
    <ContainerTextInput
      height="60px"
      width={w}
      borderWidth="2px"
      borderRadius="10px"
      padding="15px"
      marginBottom="15px"
      borderColor="#000"
    >
      <FlexView direction="row" alignItems="center" justifyContent="space-between">
        <FlexView direction="column">
          <CustomText
            fontSize="10px"
            fontWeight="400"
            color="#000000"
            lineHeight="10px"
          >
            {title}
          </CustomText>
          <FlexView direction="row">
            <CustomText
              fontSize="16px"
              fontWeight="600"
              color="#000000"
              marginRight="10px"
              lineHeight="18px"
            >
              {text}
            </CustomText>
          </FlexView>
        </FlexView>

     
        <TouchableOpacity onPress={handleShowDatePicker}>
          <Image source={IconCalendar} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </FlexView>

      
      {/* {true&& (
        <DateTimePicker
        style={{backgroundColor:'red',position:'absolute'}}
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        >
             <Image source={IconCalendar} style={{ width: 20, height: 20 }} />
             
            </DateTimePicker>
      )} */}
    </ContainerTextInput>
  );
};
