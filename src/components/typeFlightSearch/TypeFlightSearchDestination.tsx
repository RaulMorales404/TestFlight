import { CustomImputDate } from '../Inputs/CustomImputDate';
import { CustomImputText } from '../Inputs/CustomImputText';
import { FlexView } from '../styles/styles';
export const TypeFlightSearchDestination = ()=>{
    return(

        <FlexView width="100%"  direction="column">
            <FlexView width="100%" justifyContent="space-between" direction="row">
            <CustomImputText
                title={'Origin'}
                subt={'Mexico City'}
                text={'500'}
                changeColor={true}
                 w="162px"
              />
               <CustomImputText
                title={'Destination'}
                subt={'Cancún'}
                text={'CUN'}
                changeColor={true}
                 w="162px"
              />
            </FlexView>
             
              <CustomImputDate
                w="100%"
                title={'Date of departure'}
                text={'Tuesday, Nov  21'}
                changeColor={false}
                action={() => console.log('hi')}
              />
            </FlexView>
    )
}