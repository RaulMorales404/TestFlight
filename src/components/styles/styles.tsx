import styled from "styled-components";
import { Text,View,Pressable,TextInput} from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #666;
  margin-bottom: 24px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const TabButton = styled.Pressable<{ active: boolean }>`
  flex: 1;
  padding: 10px 16px;
  background-color: ${({ active }) => (active ? 'black' : 'transparent')};
  align-items: center;
`;

export const TabText = styled.Text<{ active: boolean }>`
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: 1ms;
`;

export const InputWrapper = styled.View`
  gap: 12px;
  margin-bottom: 24px;
`;

export const StyledInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
`;

export const DateInput = styled.Pressable`
  border: 1px solid black;
  border-radius: 12px;
  padding: 14px;
`;

export const DateText = styled.Text`
  font-size: 16px;
`;

export const SearchButton = styled.Pressable`
  background-color: black;
  border-radius: 12px;
  padding: 16px;
  align-items: center;
  margin-bottom: 24px;
`;

export const SearchButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const FooterText = styled.Text`
  text-align: center;
  color: #666;
`;

export const LinkText = styled.Text`
  color: black;
  font-weight: bold;
`;




export const FlexView = styled.View<{
  direction?: 'row' | 'column'; 
  justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; 
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch'; 
  grow?: number;
  shrink?: number;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderBottomEndRadius?: string;
  borderTopLeftRadius?: string;
  borderWidth: string,
  borderColor: string,
  borderRadius: string,
}>`
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  flex-grow: ${({ grow = 0 }) => grow};
  flex-shrink: ${({ shrink = 1 }) => shrink};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
  width: ${({ width = 'auto' }) => width};
  border-radius: ${({ borderRadius = '0' }) => borderRadius};
  height: ${({ height = 'auto' }) => height};
  border-width: ${({ borderWidth = '0' }) => borderWidth};
  border-color:${({  borderColor = 'transparent' }) => borderColor};
  border-bottom-end-radius: ${({ borderBottomEndRadius = '0' }) => borderBottomEndRadius};
  border-top-left-radius: ${({ borderTopLeftRadius = '0' }) => borderTopLeftRadius};
`;

export const ContainerCard = styled.View`
 width: 360px;
border-width: 1.5px;
border-color:"#000";
height:121px;
border-radius: 20px;
`;

export const CustomText = styled.Text<{
  fontSize?: string;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}>`
  font-size: ${({ fontSize = '16px' }) => fontSize};
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
  color: ${({ color = '#000' }) => color};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  margin-top: ${({ marginTop = '0' }) => marginTop};
  margin-bottom: ${({ marginBottom = '0' }) => marginBottom};
  margin-left: ${({ marginLeft = '0' }) => marginLeft};
  margin-right: ${({ marginRight = '0' }) => marginRight};
  padding: ${({ padding = '0' }) => padding};
  line-height: ${({ lineHeight = '20px' }) => lineHeight};
  letter-spacing: ${({ letterSpacing = '0' }) => letterSpacing};
  text-transform: ${({ textTransform = 'none' }) => textTransform};
`;





export const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin: 10px;
`;

// Flight header section with departure, arrival, and status
export const FlightHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const StatusText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: green;
`;

export const FlightNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const FlightTimes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
`;

export const TimeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const DurationText = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

// Flight route details
export const RouteInfo = styled.View`
  border-top-width: 1px;
  border-top-color: #ccc;
 
`;

export const RouteText = styled.Text`
  font-size: 14px;
  color: #333;
`;