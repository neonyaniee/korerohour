import Ionicons from "@react-native-vector-icons/ionicons/static";

export interface inputField{
   icon?: keyof typeof Ionicons.glyphMap;
   placeholder:string;
   value:string;
   onChangeText:(text:string)=>void;
   secureTextEntry?:boolean;
}