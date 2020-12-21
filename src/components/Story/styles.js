import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(()=>({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
        alignItems: 'center',
        
    }
}))`
    
    height: 90px;
    border-bottom-width: 1;
    border-bottom-color: rgba(255,255,255,0.2)
`
export const Option = styled.TouchableOpacity`
    width: 80px;
    align-items: center;

`;

export const Foto = styled.Image`
    width: 50px;
    height: 50px
`;

export const Label = styled.Text`
    color: #7777;
    font-size: 12px;
    font-family: 'Ubuntu_300Light'
`;