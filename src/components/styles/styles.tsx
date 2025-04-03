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
  transition: 10ms;
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

const SearchButton = styled.Pressable`
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
